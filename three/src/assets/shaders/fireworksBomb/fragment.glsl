uniform vec3 uColor; // 颜色
void main() {
  float distanceToCenter = distance(gl_PointCoord, vec2(0.5)); // 计算距离中心点的距离
  float strength = pow(1.0 - (distanceToCenter * 2.0), 1.5); // 计算强度

  gl_FragColor = vec4(uColor, strength); // 设置颜色
}
