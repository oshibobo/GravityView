<?php
/**
 * The default quiz percentage field output template.
 *
 * @since future
 */
$display_value = $gravityview->display_value;

// If there's no grade, don't continue
if ( gv_empty( $display_value, false, false ) ) {
	return;
}

/**
 * @filter `gravityview/field/quiz_percent/format` Modify the format of the display of Quiz Score (Percent) field.
 * @see http://php.net/manual/en/function.sprintf.php For formatting guide
 * @param string $format Format passed to printf() function. Default `%d%%`, which prints as "{number}%". Notice the double `%%`, this prints a literal '%' character.
 */
$format = apply_filters('gravityview/field/quiz_percent/format', '%d%%');

printf( $format, $display_value );