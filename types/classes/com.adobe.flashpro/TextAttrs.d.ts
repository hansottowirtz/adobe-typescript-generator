/// <reference path="../../packages/com.adobe.flashpro/index.d.ts"/>

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
			 */
			public aliasText: boolean;
			/**
			 * paragraph justification: 'left', 'center', 'right', 
			 * 'justify'
			 */
			public alignment: string;
			/**
			 * If true, use pair kerning information in the font(s) to kern 
			 * the text. If false, pair kerning information in the font(s) 
			 * is ignored.
			 * 
			 * only works with Static Text, will be ignored if used with 
			 * other text types.
			 */
			public autoKern: boolean;
			/** if true, text is displayed with bold version of font. */
			public bold: boolean;
			/**
			 * Acceptable values: "normal", "subscript", "superscript",   
			 * This only applies to Static Text.
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
			 */
			public characterSpacing: number;
			/** The name of the font, such as "Arial". */
			public face: string;
			/**
			 * The argument is a color string in hexadecimal #rrggbb format 
			 * or an integer containg the value.
			 */
			public fillColor: string;
			/** paragraph indentation -720 to 720 */
			public indent: number;
			/** if true, text is displayed with italic version of font. */
			public italic: boolean;
			/** paragraph's left margin 0 to 720 */
			public leftMargin: number;
			/**
			 * Integer representing the space between characters. 
			 * Acceptable values -60 to 60. Note: this is the same as the 
			 * deprecated characterSpacing
			 */
			public letterSpacing: number;
			/**
			 * Line spacing of paragraph, also known as leading.  Legal 
			 * values are -360 to 720
			 */
			public lineSpacing: number;
			/** paragraph's right margin  0 to 720 */
			public rightMargin: number;
			/**
			 * If TRUE, the characters of the text are rotated 90 degrees. 
			 * Default is FALSE.
			 * 
			 * only works with static text with a vertical orientation, 
			 * will be ignored if used with other text types.
			 */
			public rotation: boolean;
			/** The size of the font. */
			public size: number;
			/**
			 * string for the target.  This can only be used with static 
			 * text.
			 */
			public target: string;
			/**
			 * string of the URL.   This can only be used with static text.
			 */
			public url: string;
		}
	}
}