function min(a, boundary) {
  if (a > boundary) return boundary
  return a
}
function max(a, boundary) {
  if (a < boundary) return boundary
  return b
}
function mergeSort(arr) {
  const result = []
  const len = arr.length
  for (let segment = 1; segment < len; segment += segment) {
    for (let start = 0; start < len; start += segment + segment) {
      const low = start,
        mid = min(len, start + segment),
        high = min(len, start + segment + segment)
      const k = low
      const start1 = low,
        end1 = mid,
        start2 = mid,
        end2 = high
      while (start1 < end1 && start2 < end2) {
        result[k++] = arr[start1] < arr[start2] ? arr[start1++] : arr[start2++]
      }
      while (start1 < end1) {
        result[k++] = a[start1++]
      }
      while (start2 < end2) {
        result[k++] = a[start2++]
      }
    }
  }
}
