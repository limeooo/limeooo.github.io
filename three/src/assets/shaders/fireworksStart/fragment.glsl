// gl_PointCoord 是片元着色器中内置的变量，表示当前片元在点上的坐标，Three中是点着色器中的pointSize属性
// distance 是内置函数，计算两个点之间的距离
uniform vec3 uColor; // 颜色
void main() {
  float distanceToCenter = distance(gl_PointCoord, vec2(0.5)); // 计算距离中心点的距离
  float strength = pow(1.0 - (distanceToCenter * 2.0), 1.5); // 计算强度

  gl_FragColor = vec4(uColor, strength); // 设置颜色
}
