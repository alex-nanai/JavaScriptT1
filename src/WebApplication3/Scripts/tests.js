module('Calculator Test Suite', { setup: function () { initialize(); } });

test("Button Click Test", function () {
    expect(11);
    for (var i = 0; i < 10; i++) {
        var btn = $('#btn' + i);
        btn.trigger($.Event("click"));
        var result = txtInput.value;
        result = result.substr(result.length - 1, 1);
        var expected = i.toString();
        equal(result, expected, 'Expected value: ' + expected + '  Actual value: ' + result);
    }
    equal(txtInput.value.length, 10);
});