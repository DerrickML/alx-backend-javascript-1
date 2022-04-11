export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);

    const view = new DataView(buffer);
    view.setInt8(position, value);

    return view;
  } catch (_) {
    // RangeError, ...
    console.log('Position outside range');
    return null;
  }
}
