/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The text object contained in an art layer. */
		class TextItem extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** If true, alternate ligatures are used. */
			public alternateLigatures: boolean;
			/** The method of anti-aliasing to use. */
			public antiAliasMethod: Adobe.Photoshop.AntiAlias;
			/** Options for auto kerning. */
			public autoKerning: Adobe.Photoshop.AutoKernType;
			/**
			 * The percentage to use for auto leading. Range: 0.01 to 
			 * 5000.00.
			 */
			public autoLeadingAmount: number;
			/** The amount of baseline offset of text. */
			public baselineShift: string;
			/** The case of the text. */
			public capitalization: Adobe.Photoshop.TextCase;
			/** The text color. */
			public color: Adobe.Photoshop.SolidColor;
			/** The actual text in the layer. */
			public contents: string;
			/**
			 * The desired amount (as a percentage) to scale the horizontal 
			 * size of the text letters. Range: 50 - 200; at 100, the width 
			 * of characters is not scaled. Valid only for justified text.
			 */
			public desiredGlyphScaling: number;
			/**
			 * The amount of space (as a percentage) between letters. 
			 * Range: 100 - 500; at 0, no space is added between letters. 
			 * Valid only for justified text.
			 */
			public desiredLetterScaling: number;
			/**
			 * The amount (as a percentage) of space between words. Range: 
			 * 0 -1000; at 100, no additional space is added between words. 
			 * Valid only for justified text.
			 */
			public desiredWordScaling: number;
			/** The text orientation. */
			public direction: Adobe.Photoshop.Direction;
			/** If true, faux bold is used. */
			public fauxBold: boolean;
			/** If true, faux italic is used. */
			public fauxItalic: boolean;
			/**
			 * The amount to indent the first line of paragraphs. Range: 
			 * -1296 to 1296.
			 */
			public firstLineIndent: string;
			/** The text face of the character. */
			public font: string;
			/** If true, uses Roman hanging punctuation. */
			public hangingPuntuation: boolean;
			/** The height of the bounding box for paragraph text. */
			public height: string;
			/**
			 * Character scaling (horizontal) in proportion to horizontal 
			 * scale. Range: 0 - 1000 as a percentage.
			 */
			public horizontalScale: number;
			/**
			 * The number of letters after which hyphenation in word wrap 
			 * is allowed. Range: 1 to 15.
			 */
			public hyphenateAfterFirst: number;
			/**
			 * The number of letters before which hyphenation in word wrap 
			 * is allowed. Range: 1 to 15.
			 */
			public hyphenateBeforeLast: number;
			/** If true, capitalized words can be hyphenated. */
			public hyphenateCapitalWords: boolean;
			/**
			 * The minimum number of letters a word must have in order for 
			 * hyphenation in word wrap to be allowed. Range: 2 to 25. ( 
			 * minimum 0 )
			 */
			public hyphenateWordsLongerThan: number;
			/** If true, hyphenation is used. */
			public hyphenation: boolean;
			/**
			 * The distance at the end of a line that will cause a word to 
			 * break in unjustified type. Range: 0 - 720 picas.
			 */
			public hyphenationZone: string;
			/**
			 * The maximum number of consecutive lines that can end with a 
			 * hyphenated word.
			 */
			public hyphenLimit: number;
			/** The paragraph justification. */
			public justification: Adobe.Photoshop.Justification;
			/** The type of text. */
			public kind: Adobe.Photoshop.TextType;
			/** The language. */
			public language: Adobe.Photoshop.Language;
			/** The leading amount. */
			public leading: string;
			/**
			 * The amount to indent text from the left. Range: -1296 to 
			 * 1296.
			 */
			public leftIndent: string;
			/** If true, ligatures are used. */
			public ligatures: boolean;
			/**
			 * The maximum amount (as a percentage) to scale the horizontal 
			 * size of the text letters. Range: 50 - 200; at 100, the width 
			 * of characters is not scaled. Valid only for justified text.
			 */
			public maximumGlyphScaling: number;
			/**
			 * The maximum amount (as a percentage) of space between 
			 * letters. Range: 100 - 500; at 0, no space is added between 
			 * letters. Valid only for justified text.
			 */
			public maximumLetterScaling: number;
			/**
			 * The maximum amount (as a percentage) of space between words 
			 * (0 -1000; at 100, no additional space is added between 
			 * words). Valid only for justified text.
			 */
			public maximumWordScaling: number;
			/**
			 * The minimum amount (as a percentage) to scale the horizontal 
			 * size of the text letters. Range: 50 - 200; at 100, the width 
			 * of characters is not scaled. Valid only for justified text.
			 */
			public minimumGlyphScaling: number;
			/**
			 * The minimum amount of space (as a percentage) between 
			 * letters. Range: 100 to 500; at 0, no space is added between 
			 * letters. Valid only for justified text.
			 */
			public minimumLetterScaling: number;
			/**
			 * The minimum amount (as a percentage) of space between words. 
			 * Range: 0 -1000; at 100, no additional space is added between 
			 * words. Valid only for justified text.
			 */
			public minimumWordScaling: number;
			/**
			 * If true, words are not allowed to break at the end of a 
			 * line. When enacted on large amounts of consecutive 
			 * characters, can prevent word wrap and thus may prevent some 
			 * text from appearing on the screen.
			 */
			public noBreak: boolean;
			/** If true, old style is used. */
			public oldStyle: boolean;
			/**
			 * The position of the origin for the text. The array must 
			 * contain two values. Setting this property is basically 
			 * equivalent to clicking the text tool at a point in the 
			 * document to create the point of origin for text.
			 */
			public position: any[];
			/**
			 * The amount to indent text from the right. Range: -1296 to 
			 * 1296.
			 */
			public rightIndent: string;
			/** The font size. */
			public size: string;
			/**
			 * The amount of space after each paragraph. Range: -1296 to 
			 * 1296.
			 */
			public spaceAfter: string;
			/**
			 * The amount of space before each paragraph. Range: -1296 to 
			 * 1296.
			 */
			public spaceBefore: string;
			/** The strike through option to use. */
			public strikeThru: Adobe.Photoshop.StrikeThruType;
			/** The text composing engine to use. */
			public textComposer: Adobe.Photoshop.TextComposer;
			/**
			 * The amount of uniform spacing between multiple characters. 
			 * Range: -1000 to 10000.
			 */
			public tracking: number;
			/** Options for underlining the text. */
			public underline: Adobe.Photoshop.UnderlineType;
			/** If true, uses the font's built-in leading information. */
			public useAutoLeading: boolean;
			/**
			 * Character scaling (vertical) in proportion to horizontal 
			 * scale. Range: 0 - 1000 as a percentage.
			 */
			public verticalScale: number;
			/** The warp bend percentage. Range: -100 to 100. */
			public warpBend: number;
			/** The warp direction. */
			public warpDirection: Adobe.Photoshop.Direction;
			/**
			 * The warp horizontal distortion percentage. Range: -100 to 
			 * 100.
			 */
			public warpHorizontalDistortion: number;
			/** The style of warp. */
			public warpStyle: Adobe.Photoshop.WarpStyle;
			/**
			 * The warp vertical distortion percentage. Range: -100 to 100.
			 */
			public warpVerticalDistortion: number;
			/** The width of the bounding box for paragraph text. */
			public width: string;
			/**
			 * Converts the text object and its containing layer to a fill 
			 * layer with the text changed to a clipping path.
			 */
			public convertToShape(): void;
			/**
			 * Creates a clipping path from the outlines of the actual text 
			 * items (such as letters or words).
			 */
			public createPath(): void;
		}
	}
}