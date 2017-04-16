/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * TextAttrs object contains all the properties of text which 
		 * can be applied to a subselection. The properties which 
		 * describe characters
		 */
		class TextAttrs extends Adobe.Csawlib.CSHostObject {
			/**
			 * The text should be drawn using a method optimized for 
			 * increasing the legibility of small text.
			 * @type {boolean}
			 */
			public aliasText: boolean;
			/**
			 * paragraph justification: 'left', 'center', 'right', 
			 * 'justify'
			 * @type {string}
			 */
			public alignment: string;
			/**
			 * If true, use pair kerning information in the font(s) to kern 
			 * the text. If false, pair kerning information in the font(s) 
			 * is ignored.
			 * 
			 * only works with Static Text, will be ignored if used with 
			 * other text types.
			 * @type {boolean}
			 */
			public autoKern: boolean;
			/**
			 * if true, text is displayed with bold version of font.
			 * @type {boolean}
			 */
			public bold: boolean;
			/**
			 * Acceptable values: "normal", "subscript", "superscript",   
			 * This only applies to Static Text.
			 * @type {string}
			 */
			public characterPosition: string;
			/**
			 * This is deprecated. Use letterSpacing instead. 
			 * 
			 * Integer representing the space between characters. 
			 * Acceptable values -60 to 60.
			 * 
			 * only works with Static Text, will be ignored if used with 
			 * other text types.
			 * @type {number}
			 */
			public characterSpacing: number;
			/**
			 * The name of the font, such as "Arial".
			 * @type {string}
			 */
			public face: string;
			/**
			 * The argument is a color string in hexadecimal #rrggbb format 
			 * or an integer containg the value.
			 * @type {string}
			 */
			public fillColor: string;
			/**
			 * paragraph indentation -720 to 720
			 * @type {number}
			 */
			public indent: number;
			/**
			 * if true, text is displayed with italic version of font.
			 * @type {boolean}
			 */
			public italic: boolean;
			/**
			 * paragraph's left margin 0 to 720
			 * @type {number}
			 */
			public leftMargin: number;
			/**
			 * Integer representing the space between characters. 
			 * Acceptable values -60 to 60. Note: this is the same as the 
			 * deprecated characterSpacing
			 * @type {number}
			 */
			public letterSpacing: number;
			/**
			 * Line spacing of paragraph, also known as leading.  Legal 
			 * values are -360 to 720
			 * @type {number}
			 */
			public lineSpacing: number;
			/**
			 * paragraph's right margin  0 to 720
			 * @type {number}
			 */
			public rightMargin: number;
			/**
			 * If TRUE, the characters of the text are rotated 90 degrees. 
			 * Default is FALSE.
			 * 
			 * only works with static text with a vertical orientation, 
			 * will be ignored if used with other text types.
			 * @type {boolean}
			 */
			public rotation: boolean;
			/**
			 * The size of the font.
			 * @type {number}
			 */
			public size: number;
			/**
			 * string for the target.  This can only be used with static 
			 * text.
			 * @type {string}
			 */
			public target: string;
			/**
			 * string of the URL.   This can only be used with static text.
			 * @type {string}
			 */
			public url: string;
		}
	}
}