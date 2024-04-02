function studyPath(idStr, options) {
	options = options || {}
	let that = this
	let studyPath = d3.select(idStr)
	let path = options.path || 'img/'
	let viewW = studyPath.node().clientWidth
	let viewH = studyPath.node().clientHeight
	let boxW = viewW
	let boxH = viewH
	let spaceX = options.spaceX || 180 // 列间距
	let spaceY = options.spaceY || 100 // 行间距
	let td = options.td || 5
	let boxPadding = {
		w: 1920,
		h: 1000,
		pt: 60,
		pr: 10,
		pl: 60,
		pb: 10
	}
	let itemPadding = {
		w: 160,
		h: 200, 
		pt: 1,
		pr: 10,
		pl: 1,
		pb: 1
	}
	boxPadding.w = viewW - boxPadding.pl - boxPadding.pr
	boxPadding.h = viewH - boxPadding.pt - boxPadding.pb
	let itemW = itemPadding.w + itemPadding.pl + itemPadding.pr + spaceX
	let itemH = itemPadding.h + itemPadding.pt + itemPadding.pb + spaceY
	
	let studyPath_svg = studyPath.selectAll('.studyPath_svg').data([1]).join('svg').attr('class', 'studyPath_svg').attr('width', viewW).attr('height', viewH).attr('viewBox', `0 0 ${viewW} ${viewH}`).attr('xmlns', 'http://www.w3.org/2000/svg') // 放关系图的容器
	let studyPath_scale = studyPath_svg.selectAll('.studyPath_scale').data([1]).join('g').attr('class', 'studyPath_scale') // 放关系图的容器
	
	let studyPath_html = studyPath_scale.selectAll('.studyPath_html').data([1]).join('foreignObject').attr('class', 'studyPath_html') // 放关系图的容器
	let studyPath_box = studyPath_html.selectAll('.studyPath_box').data([1]).join('div').attr('class', 'studyPath_box').attr('xmlns', "http://www.w3.org/1999/xhtml") // 放关系图的容器
	let znodes = studyPath_box.selectAll('.znodes').data([1]).join('div').attr('class', 'znodes') // 节点容器
	let zlines = studyPath_box.selectAll('.zlines').data([1]).join('div').attr('class', 'zlines') // 关系线容器
	
	this.points = []
	
	this.render = function (nodes) {
		let row = Math.ceil(nodes.length / td)
		boxW = itemW * td
		boxH = itemH * row
		studyPath_box.style('width', `${boxW}px`).style('height', `${boxH}px`)
		studyPath_html.style('width', `${boxW}px`).style('height', `${boxH}px`)
		zlines.style('width', `${boxW}px`).style('height', `${boxH}px`)
		znodes.style('width', `${boxW}px`).style('height', `${boxH}px`)
		that.points = getNodesSite(nodes, td, {spaceX, spaceY}, itemPadding, boxPadding)
		drawLines(that.points)
		drawNodes(that.points)
		let html = studyPath_html.html()
		studyPath_html.html(html)
		initZoom()
	}
	
	/**
	 * 初始化比例缩放
	 */
	function initZoom () {
		let minRatio = options.ratio && options.ratio[0] || 0.2 // 最小缩放比
		let maxRatio = options.ratio && options.ratio[1] || 4 // 最大缩放比
		// 创建缩放对象
		let initialZoom = d3.zoom()
		
		// 计算默认渲染缩放比例，默认full满屏，all展示全貌，小数展示指定比例1 >= zoom > 0
		let initialScale = 1
		if (options.zoom == 'all') { // 全貌
			initialScale = Math.min(viewW / boxW, viewH / boxH);
		} else if (options.zoom == 'full') { // 满屏
			initialScale = Math.max(viewW / boxW, viewH / boxH);
		} else if (isNumber(options.zoom * 1) && options.zoom > 0) { // 设置比例
			initialScale = options.zoom
		} else { // 默认是满屏
			initialScale = Math.min(viewW / boxW, viewH / boxH);
		}
		
		if (initialScale < minRatio) initialScale = minRatio // 限制最小缩放比
		if (initialScale > 1) initialScale = 1 // // 限制初始化最大不能超过100%的比例
		// 计算平移距离
		let initialX = (viewW - boxW * initialScale) / 2;
		let initialY = (viewH - boxH * initialScale) / 2;
		if (initialScale < 0.3 && topHeight) {
			initialY += topHeight
		}
		// 设置初始变换
		studyPath_scale.transition().duration(200).attr("transform", "translate(" + initialX + "," + initialY + ")scale(" + initialScale + ")");
		zoom = d3.zoomIdentity.translate(initialX, initialY).scale(initialScale);
		
		studyPath_svg.call(initialZoom.transform, zoom);
		let dd = studyPath_svg.call(initialZoom
		.scaleExtent([minRatio, maxRatio]) // 缩放最小--最大范围
			.on('zoom', function (event) {
				studyPath_scale.attr('transform', () => {
					zoom = event.transform
					return zoom
				})
			})
		) // 给图形添加缩放
		.on('dblclick.zoom', null)
		if (options.isStopMouseWheel) { // 是否关闭鼠标滚轮缩放功能
			dd.on('wheel.zoom', null)
		}
	}
	
	/**
	 * 画线
	 * @param {Object} points
	 */
	function drawLines (points) {
		zlines.selectAll('.zlines-item')
		.data(points)
		.join('p')
		.attr('class', 'zlines-item')
		.style('width', d => `${d.lineW}px`)
		.style('height', d => `${d.lineH}px`)
		.style('left', d => `${d.lineX}px`)
		.style('top', d => `${d.lineY}px`)
		.classed('zlines-down', d => d.forward == 'down')
		.classed('zlines-end', d => d.icon == 'end')
		.html(d => d.line)
	}
	
	/**
	 * 画节点
	 * @param {Object} points
	 */
	function drawNodes (points) {
		znodes.selectAll('.znodes-item')
		.data(points)
		.join('dl')
		.attr('class', 'znodes-item')
		.style('left', d => `${d.x}px`)
		.style('top', d => `${d.y}px`)
		.style('opacity', d => d.icon == 'end' ? 0.6 : 1)
		.classed('znodes-start', d => d.icon == 'start')
		.classed('znodes-current', d => d.icon == 'current')
		.classed('znodes-end', d => d.icon == 'end')
		.classed('znodes-lock', d => d.icon == 2 || d.icon == 'end')
		.html(d => d.html)
	}
	
	
	
	/**
	 * 获取节点位置
	 * @param {Array} nodes
	 * @param {Number} td
	 * @param {Number} space
	 * @param {Object} itemPadding
	 * @param {Object} boxPadding
	 */
	function getNodesSite (nodes, td, space, itemPadding, boxPadding) {
		let {spaceX, spaceY} = space
		let iconArr = ['start', 'current', 'end']
		return nodes.map((node, index) => {
			let lie = index % td
			let row = Math.floor(index / td)
			if (row % 2) {
				lie = td - lie - 1
			}
			node = formatLines(node, td, row, lie)
			node = formatNodes(node)
			
			
			node.x = lie * (itemPadding.w + spaceX) + (lie + 1 * itemPadding.pr) + boxPadding.pl
			node.y = row * (spaceY + itemPadding.h) + boxPadding.pt
			if (node.forward == 'down') {
				if (row % 2) {
					node.lineX = node.x + itemPadding.w * 0.5
				} else {
					node.lineX = node.x + (itemPadding.w + itemPadding.pr + itemPadding.pl) * 0.5
				}
				node.lineY = node.y + itemPadding.h + itemPadding.pt + itemPadding.pb
				node.lineW = 24
				node.lineH = spaceY
			} else {
				if (row % 2) {
					node.lineX = node.x - itemPadding.w - itemPadding.pl - itemPadding.pr
				} else {
					node.lineX = node.x + itemPadding.w + itemPadding.pl + itemPadding.pr
				}
				node.lineY = node.y + itemPadding.h * 0.5 - 10
				node.lineW =  spaceX
				node.lineH =  24
			}
			return node
		})
	}
	
	/**
	 * 格式化节点
	 * @param {Object} node
	 */
	function formatNodes (node) {
		let iconPath = {
			start: `<dd><img src="${path}start.svg"/></dd>`,
			current: `<dd><img src="${path}current.svg"/></dd>`,
			end: `<dd><img src="${path}end.svg"/></dd>`,
			path1: `<dd><img src="${path}color.svg"/></dd>`,
			path2: `<dd><img src="${path}gray.svg"/></dd>`
		}
		let iconArr = ['start', 'current', 'end']
		if (iconArr.indexOf(node.icon) >= 0) {
			node.html = iconPath[node.icon] + `<dt>${node.name}</dt>`
		} else if (isNumber(node.icon)) {
			node.html = iconPath['path' + node.icon] + `<dt>${node.name}</dt>`
		} else {
			node.html = `<dd></dd><dt>${icon.name}</dt>`
		}
		return node
	}
	
	/**
	 * 格式化线
	 * @param {Object} node
	 * @param {Object} td
	 * @param {Object} row
	 * @param {Object} lie
	 */
	function formatLines (node, td, row, lie) {
		let iconLine = {
			right1: `<img src="${path}arrowColor-right.svg">`, 
			right2: `<img src="${path}arrowGray-right.svg">`, 
			left1: `<img src="${path}arrowColor-left.svg">`, 
			left2: `<img src="${path}arrowGray-left.svg">`,
			down1: `<img src="${path}arrowColor-down.svg">`, 
			down2: `<img src="${path}arrowGray-down.svg">`, 
		}
		let iconArr = ['current', 'end']
		
		if (td == 1) {
			if (node.icon == 'start' || node.icon == 1) {
				node.line = iconLine.down1
			} else if (node.icon == 'end') {
				node.line = ''
			} else {
				node.line = iconLine.down2
			}
		} else {
			if (node.icon == 'start') {
				node.line = iconLine.right1
			} else if (node.icon == 'end') {
				node.line = ''
			} else if (row % 2) { // 偶数行
				if (node.icon == 1) {
					if (lie == 0) {// 拐弯
						node.line = iconLine.down1
						node.forward = 'down'
					} else {
						node.line = iconLine.left1
						node.forward = 'left'
					}
				} else {
					if (lie == 0) {// 拐弯
						node.line = iconLine.down2
						node.forward = 'down'
					} else {
						node.line = iconLine.left2
						node.forward = 'left'
					}
				}
			} else { // 奇数行
				if (node.icon == 1) {
					if (td == (lie + 1)) {// 拐弯
						node.line = iconLine.down1
						node.forward = 'down'
					} else {
						node.line = iconLine.right1
						node.forward = 'right'
					}
				} else {
					if (td == (lie + 1)) { // 拐弯
						node.line = iconLine.down1
						node.forward = 'down'
					} else {
						node.forward = 'right'
						node.line = iconLine.right2
					}
				}
			}
		}
		
		return node
	}
	
	/**
	 * 是否为数字
	 * @param {Object} value
	 */
	function isNumber(value) {
	    return !isNaN(parseFloat(value)) && isFinite(value);
	}

}