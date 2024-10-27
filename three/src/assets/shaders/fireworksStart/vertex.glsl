// position 是顶点着色器中内置的变量，表示当前顶点的位置，Three中是模型的position属性
// modelMatrix 是模型矩阵，表示模型相对于世界坐标系的位置，Three中是模型的modelMatrix属性
// viewMatrix 是视图矩阵，表示视图相对于世界坐标系的位置，Three中是相机的viewMatrix属性
// projectionMatrix 是投影矩阵，表示投影相对于视图坐标系的位置，Three中是相机的projectionMatrix属性
attribute vec3 aStep; // 起点到终点的向量
uniform float uDistance; // 距离
uniform float uSize; // 点的大小
void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0); // 模型矩阵
  modelPosition.xyz += aStep * uDistance; // 根据时间移动

  vec4 viewPosition = viewMatrix * modelPosition; // 视图矩阵

  gl_Position = projectionMatrix * viewPosition; // 设置顶点位置
  gl_PointSize = uSize; // 点的大小
}
