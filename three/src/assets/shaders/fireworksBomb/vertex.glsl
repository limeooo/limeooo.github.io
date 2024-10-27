attribute float aScale; // 缩放比例
attribute vec3 aDirection; // 方向
uniform float uDistance; // 距离
uniform float uSize; // 点的大小
void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0); // 模型矩阵
  modelPosition.xyz += aDirection * uDistance; // 添加方向和距离
  vec4 viewPosition = viewMatrix * modelPosition; // 视图矩阵

  gl_Position = projectionMatrix * viewPosition; // 设置顶点位置
  gl_PointSize = uSize * aScale - (uDistance * 4.0); // 点的大小
}
