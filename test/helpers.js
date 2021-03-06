function range(count, callback) {
  let array = [];
  for (let i = 0; i < count; i++) {
    array.push(callback ? callback(i) : i);
  }
  return array;
}

function changeElementValue(input, value) {
  input.val(value);
  if ('oninput' in input) {
    input.trigger('input');
  }
  else {
        // 'input' doesn't work in Opera, so 'change' is used instead
    input.trigger('change');
  }
}