<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# incrmcv

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a moving [coefficient of variation][coefficient-of-variation] (CV) incrementally.

<section class="intro">

For a window of size `W`, the [corrected sample standard deviation][standard-deviation] is defined as

<!-- <equation class="equation" label="eq:corrected_sample_standard_deviation" align="center" raw="s = \sqrt{\frac{1}{W-1} \sum_{i=0}^{W-1} ( x_i - \bar{x} )^2}" alt="Equation for the corrected sample standard deviation."> -->

```math
s = \sqrt{\frac{1}{W-1} \sum_{i=0}^{W-1} ( x_i - \bar{x} )^2}
```

<!-- <div class="equation" align="center" data-raw-text="s = \sqrt{\frac{1}{W-1} \sum_{i=0}^{W-1} ( x_i - \bar{x} )^2}" data-equation="eq:corrected_sample_standard_deviation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@eed6b690d7c37249b04544b3f5fd36ad8eb3187f/lib/node_modules/@stdlib/stats/incr/mcv/docs/img/equation_corrected_sample_standard_deviation.svg" alt="Equation for the corrected sample standard deviation.">
    <br>
</div> -->

<!-- </equation> -->

and the [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean" align="center" raw="\bar{x} = \frac{1}{W} \sum_{i=0}^{W-1} x_i" alt="Equation for the arithmetic mean."> -->

```math
\bar{x} = \frac{1}{W} \sum_{i=0}^{W-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\bar{x} = \frac{1}{W} \sum_{i=0}^{W-1} x_i" data-equation="eq:arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@4cf17e4e25cc2244d5154bd5d251f4bd023748da/lib/node_modules/@stdlib/stats/incr/mcv/docs/img/equation_arithmetic_mean.svg" alt="Equation for the arithmetic mean.">
    <br>
</div> -->

<!-- </equation> -->

The [coefficient of variation][coefficient-of-variation] (also known as **relative standard deviation**, RSD) is defined as

<!-- <equation class="equation" label="eq:coefficient_of_variation" align="center" raw="c_v = \frac{s}{\bar{x}}" alt="Equation for the coefficient of variation (CV)."> -->

<div class="equation" align="center" data-raw-text="c_v = \frac{s}{\bar{x}}" data-equation="eq:coefficient_of_variation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@eed6b690d7c37249b04544b3f5fd36ad8eb3187f/lib/node_modules/@stdlib/stats/incr/mcv/docs/img/equation_coefficient_of_variation.svg"Equation for the coefficient of variation (CV).">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
incrmcv = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mcv@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var incrmcv = require( 'path/to/vendor/umd/stats-incr-mcv/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mcv@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.incrmcv;
})();
</script>
```

#### incrmcv( window\[, mean] )

Returns an accumulator `function` which incrementally computes a moving [coefficient of variation][coefficient-of-variation]. The `window` parameter defines the number of values over which to compute the moving [coefficient of variation][coefficient-of-variation].

```javascript
var accumulator = incrmcv( 3 );
```

If the mean is already known, provide a `mean` argument.

```javascript
var accumulator = incrmcv( 3, 5.0 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated accumulated value. If not provided an input value `x`, the accumulator function returns the current accumulated value.

```javascript
var accumulator = incrmcv( 3 );

var cv = accumulator();
// returns null

// Fill the window...
cv = accumulator( 2.0 ); // [2.0]
// returns 0.0

cv = accumulator( 1.0 ); // [2.0, 1.0]
// returns ~0.47

cv = accumulator( 3.0 ); // [2.0, 1.0, 3.0]
// returns 0.5

// Window begins sliding...
cv = accumulator( 7.0 ); // [1.0, 3.0, 7.0]
// returns ~0.83

cv = accumulator( 5.0 ); // [3.0, 7.0, 5.0]
// returns ~0.40

cv = accumulator();
// returns ~0.40
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
-   The [coefficient of variation][coefficient-of-variation] is typically computed on nonnegative values. The measure may lack meaning for data which can assume both positive and negative values.
-   For small and moderately sized samples, the accumulated value tends to be too low and is thus a **biased** estimator. Provided the generating distribution is known (e.g., a normal distribution), you may want to adjust the accumulated value or use an alternative implementation providing an unbiased estimator.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mcv@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmcv( 5 );

// For each simulated datum, update the moving coefficient of variation...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-incr/cv`][@stdlib/stats/incr/cv]</span><span class="delimiter">: </span><span class="description">compute the coefficient of variation (CV) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mmean`][@stdlib/stats/incr/mmean]</span><span class="delimiter">: </span><span class="description">compute a moving arithmetic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mstdev`][@stdlib/stats/incr/mstdev]</span><span class="delimiter">: </span><span class="description">compute a moving corrected sample standard deviation incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mvmr`][@stdlib/stats/incr/mvmr]</span><span class="delimiter">: </span><span class="description">compute a moving variance-to-mean ratio (VMR) incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-mcv.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-mcv

[test-image]: https://github.com/stdlib-js/stats-incr-mcv/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-incr-mcv/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-mcv/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-mcv?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-mcv.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-mcv/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-mcv/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-incr-mcv/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-incr-mcv/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-incr-mcv/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-mcv/main/LICENSE

[coefficient-of-variation]: https://en.wikipedia.org/wiki/Coefficient_of_variation

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

<!-- <related-links> -->

[@stdlib/stats/incr/cv]: https://github.com/stdlib-js/stats-incr-cv/tree/umd

[@stdlib/stats/incr/mmean]: https://github.com/stdlib-js/stats-incr-mmean/tree/umd

[@stdlib/stats/incr/mstdev]: https://github.com/stdlib-js/stats-incr-mstdev/tree/umd

[@stdlib/stats/incr/mvmr]: https://github.com/stdlib-js/stats-incr-mvmr/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
