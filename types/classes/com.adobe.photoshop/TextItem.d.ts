/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Text object contained in an art layer */
		class TextItem extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** use alternate ligatures? */
			public alternateLigatures: boolean;
			public antiAliasMethod: Adobe.Photoshop.AntiAlias;
			/** options for auto kerning */
			public autoKerning: Adobe.Photoshop.AutoKernType;
			/** percentage to use for auto leading */
			public autoLeadingAmount: number;
			/** baseline offset of text (unit value) */
			public baselineShift: any;
			/** the case of the text */
			public capitalization: Adobe.Photoshop.TextCase;
			/** color of text */
			public color: Adobe.Photoshop.SolidColor;
			/** the text in the layer */
			public contents: string;
			public desiredGlyphScaling: number;
			public desiredLetterScaling: number;
			public desiredWordScaling: number;
			/** text orientation */
			public direction: Adobe.Photoshop.Direction;
			/** use faux bold? */
			public fauxBold: boolean;
			/** use faux italic? */
			public fauxItalic: boolean;
			/** (unit value) */
			public firstLineIndent: any;
			/** text face of the character */
			public font: string;
			/** use Roman Hanging Punctuation? */
			public hangingPuntuation: boolean;
			/** the height of paragraph text (unit value) */
			public height: any;
			/** horizontal scaling of characters (in percent) */
			public horizontalScale: number;
			/** hyphenate after this many letters */
			public hyphenateAfterFirst: number;
			/** hyphenate before this many letters */
			public hyphenateBeforeLast: number;
			/** wheter to hyphenate capitalized words */
			public hyphenateCapitalWords: boolean;
			/**
			 * hyphenate words that have more than this number of letters ( 
			 * minimum 0 )
			 */
			public hyphenateWordsLongerThan: number;
			/** use hyphenation? */
			public hyphenation: boolean;
			/** the hyphenation zone (unit value) */
			public hyphenationZone: any;
			/** maximum number of consecutive hyphens */
			public hyphenLimit: number;
			/** paragraph justification */
			public justification: Adobe.Photoshop.Justification;
			/** the type of the text */
			public kind: Adobe.Photoshop.TextType;
			public language: Adobe.Photoshop.Language;
			/** leading (unit value) */
			public leading: any;
			/** (unit value) */
			public leftIndent: any;
			/** use ligatures? */
			public ligatures: boolean;
			public maximumGlyphScaling: number;
			public maximumLetterScaling: number;
			public maximumWordScaling: number;
			public minimumGlyphScaling: number;
			public minimumLetterScaling: number;
			public minimumWordScaling: number;
			public noBreak: boolean;
			/** use old style? */
			public oldStyle: boolean;
			/** position of origin (unit value) */
			public position: any[];
			/** (unit value) */
			public rightIndent: any;
			/** font size in points */
			public size: any;
			/** (unit value) */
			public spaceAfter: any;
			/** (unit value) */
			public spaceBefore: any;
			/** options for strik thru of the text */
			public strikeThru: Adobe.Photoshop.StrikeThruType;
			/** type of text composing engine to use */
			public textComposer: Adobe.Photoshop.TextComposer;
			/** controls uniform spacing between multiple characters */
			public tracking: number;
			/** options for underlining of the text */
			public underline: Adobe.Photoshop.UnderlineType;
			/** whether to use a font's built-in leading information */
			public useAutoLeading: boolean;
			/** vertical scaling of characters (in percent) */
			public verticalScale: number;
			/** percentage from -100 to 100 */
			public warpBend: number;
			public warpDirection: Adobe.Photoshop.Direction;
			/** percentage from -100 to 100 */
			public warpHorizontalDistortion: number;
			public warpStyle: Adobe.Photoshop.WarpStyle;
			/** percentage from -100 to 100 */
			public warpVerticalDistortion: number;
			/** the width of paragraph text (unit value) */
			public width: any;
			/**
			 * converts the text object and its containing layer to a fill 
			 * layer with the text changed to a clipping path
			 */
			public convertToShape(): void;
			/** creates a work path based on the text object */
			public createPath(): void;
		}
	}
}