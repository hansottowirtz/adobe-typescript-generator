/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Text object contained in an art layer */
		class TextItem extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * use alternate ligatures?
			 * @type {boolean}
			 */
			public alternateLigatures: boolean;
			/**
			 * @type {Adobe.Photoshop.AntiAlias}
			 */
			public antiAliasMethod: Adobe.Photoshop.AntiAlias;
			/**
			 * options for auto kerning
			 * @type {Adobe.Photoshop.AutoKernType}
			 */
			public autoKerning: Adobe.Photoshop.AutoKernType;
			/**
			 * percentage to use for auto leading
			 * @type {number}
			 */
			public autoLeadingAmount: number;
			/**
			 * baseline offset of text (unit value)
			 * @type {any}
			 */
			public baselineShift: any;
			/**
			 * the case of the text
			 * @type {Adobe.Photoshop.TextCase}
			 */
			public capitalization: Adobe.Photoshop.TextCase;
			/**
			 * color of text
			 * @type {Adobe.Photoshop.SolidColor}
			 */
			public color: Adobe.Photoshop.SolidColor;
			/**
			 * the text in the layer
			 * @type {string}
			 */
			public contents: string;
			/**
			 * @type {number}
			 */
			public desiredGlyphScaling: number;
			/**
			 * @type {number}
			 */
			public desiredLetterScaling: number;
			/**
			 * @type {number}
			 */
			public desiredWordScaling: number;
			/**
			 * text orientation
			 * @type {Adobe.Photoshop.Direction}
			 */
			public direction: Adobe.Photoshop.Direction;
			/**
			 * use faux bold?
			 * @type {boolean}
			 */
			public fauxBold: boolean;
			/**
			 * use faux italic?
			 * @type {boolean}
			 */
			public fauxItalic: boolean;
			/**
			 * (unit value)
			 * @type {any}
			 */
			public firstLineIndent: any;
			/**
			 * text face of the character
			 * @type {string}
			 */
			public font: string;
			/**
			 * use Roman Hanging Punctuation?
			 * @type {boolean}
			 */
			public hangingPuntuation: boolean;
			/**
			 * the height of paragraph text (unit value)
			 * @type {any}
			 */
			public height: any;
			/**
			 * horizontal scaling of characters (in percent)
			 * @type {number}
			 */
			public horizontalScale: number;
			/**
			 * hyphenate after this many letters
			 * @type {number}
			 */
			public hyphenateAfterFirst: number;
			/**
			 * hyphenate before this many letters
			 * @type {number}
			 */
			public hyphenateBeforeLast: number;
			/**
			 * wheter to hyphenate capitalized words
			 * @type {boolean}
			 */
			public hyphenateCapitalWords: boolean;
			/**
			 * hyphenate words that have more than this number of letters ( 
			 * minimum 0 )
			 * @type {number}
			 */
			public hyphenateWordsLongerThan: number;
			/**
			 * use hyphenation?
			 * @type {boolean}
			 */
			public hyphenation: boolean;
			/**
			 * the hyphenation zone (unit value)
			 * @type {any}
			 */
			public hyphenationZone: any;
			/**
			 * maximum number of consecutive hyphens
			 * @type {number}
			 */
			public hyphenLimit: number;
			/**
			 * paragraph justification
			 * @type {Adobe.Photoshop.Justification}
			 */
			public justification: Adobe.Photoshop.Justification;
			/**
			 * the type of the text
			 * @type {Adobe.Photoshop.TextType}
			 */
			public kind: Adobe.Photoshop.TextType;
			/**
			 * @type {Adobe.Photoshop.Language}
			 */
			public language: Adobe.Photoshop.Language;
			/**
			 * leading (unit value)
			 * @type {any}
			 */
			public leading: any;
			/**
			 * (unit value)
			 * @type {any}
			 */
			public leftIndent: any;
			/**
			 * use ligatures?
			 * @type {boolean}
			 */
			public ligatures: boolean;
			/**
			 * @type {number}
			 */
			public maximumGlyphScaling: number;
			/**
			 * @type {number}
			 */
			public maximumLetterScaling: number;
			/**
			 * @type {number}
			 */
			public maximumWordScaling: number;
			/**
			 * @type {number}
			 */
			public minimumGlyphScaling: number;
			/**
			 * @type {number}
			 */
			public minimumLetterScaling: number;
			/**
			 * @type {number}
			 */
			public minimumWordScaling: number;
			/**
			 * @type {boolean}
			 */
			public noBreak: boolean;
			/**
			 * use old style?
			 * @type {boolean}
			 */
			public oldStyle: boolean;
			/**
			 * position of origin (unit value)
			 * @type {any[]}
			 */
			public position: any[];
			/**
			 * (unit value)
			 * @type {any}
			 */
			public rightIndent: any;
			/**
			 * font size in points
			 * @type {any}
			 */
			public size: any;
			/**
			 * (unit value)
			 * @type {any}
			 */
			public spaceAfter: any;
			/**
			 * (unit value)
			 * @type {any}
			 */
			public spaceBefore: any;
			/**
			 * options for strik thru of the text
			 * @type {Adobe.Photoshop.StrikeThruType}
			 */
			public strikeThru: Adobe.Photoshop.StrikeThruType;
			/**
			 * type of text composing engine to use
			 * @type {Adobe.Photoshop.TextComposer}
			 */
			public textComposer: Adobe.Photoshop.TextComposer;
			/**
			 * controls uniform spacing between multiple characters
			 * @type {number}
			 */
			public tracking: number;
			/**
			 * options for underlining of the text
			 * @type {Adobe.Photoshop.UnderlineType}
			 */
			public underline: Adobe.Photoshop.UnderlineType;
			/**
			 * whether to use a font's built-in leading information
			 * @type {boolean}
			 */
			public useAutoLeading: boolean;
			/**
			 * vertical scaling of characters (in percent)
			 * @type {number}
			 */
			public verticalScale: number;
			/**
			 * percentage from -100 to 100
			 * @type {number}
			 */
			public warpBend: number;
			/**
			 * @type {Adobe.Photoshop.Direction}
			 */
			public warpDirection: Adobe.Photoshop.Direction;
			/**
			 * percentage from -100 to 100
			 * @type {number}
			 */
			public warpHorizontalDistortion: number;
			/**
			 * @type {Adobe.Photoshop.WarpStyle}
			 */
			public warpStyle: Adobe.Photoshop.WarpStyle;
			/**
			 * percentage from -100 to 100
			 * @type {number}
			 */
			public warpVerticalDistortion: number;
			/**
			 * the width of paragraph text (unit value)
			 * @type {any}
			 */
			public width: any;
			/**
			 * converts the text object and its containing layer to a fill 
			 * layer with the text changed to a clipping path
			 * @returns {void}
			 */
			public convertToShape(): void;
			/**
			 * creates a work path based on the text object
			 * @returns {void}
			 */
			public createPath(): void;
		}
	}
}