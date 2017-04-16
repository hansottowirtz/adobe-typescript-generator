/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** properties of a paragraph */
		class ParagraphAttributes extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * auto leading amount (in percentage)
			 * @type {number}
			 */
			public autoLeadingAmount: number;
			/**
			 * is BunriKinshi enabled?
			 * @type {boolean}
			 */
			public bunriKinshi: boolean;
			/**
			 * the Burasagari type
			 * @type {Adobe.Illustrator.BurasagariTypeEnum}
			 */
			public burasagariType: Adobe.Illustrator.BurasagariTypeEnum;
			/**
			 * desired glyph scaling expressed as a percentage
			 * @type {number}
			 */
			public desiredGlyphScaling: number;
			/**
			 * desired letter spacing expressed as a percentage
			 * @type {number}
			 */
			public desiredLetterSpacing: number;
			/**
			 * desired word spacing expressed as a percentage
			 * @type {number}
			 */
			public desiredWordSpacing: number;
			/**
			 * whether to enable every line composer (as opposed to single 
			 * line composer)?
			 * @type {boolean}
			 */
			public everyLineComposer: boolean;
			/**
			 * first line left indent expressed in points
			 * @type {number}
			 */
			public firstLineIndent: number;
			/**
			 * is hyphenation enabled for the capitalized words?
			 * @type {boolean}
			 */
			public hyphenateCapitalizedWords: boolean;
			/**
			 * is hyphenation enabled for the paragraph?
			 * @type {boolean}
			 */
			public hyphenation: boolean;
			/**
			 * hyphenation preference scale for better spacing (0) or fewer 
			 * hyphens (1) ( 0.0 - 1.0 )
			 * @type {number}
			 */
			public hyphenationPreference: number;
			/**
			 * size of the hyphenation zone
			 * @type {number}
			 */
			public hyphenationZone: number;
			/**
			 * paragraph justification
			 * @type {Adobe.Illustrator.Justification}
			 */
			public justification: Adobe.Illustrator.Justification;
			/**
			 * the Kinsoku Shori name
			 * @type {string}
			 */
			public kinsoku: string;
			/**
			 * the preferred Kinsoku order
			 * @type {Adobe.Illustrator.KinsokuOrderEnum}
			 */
			public kinsokuOrder: Adobe.Illustrator.KinsokuOrderEnum;
			/**
			 * is KurikaeshiMojiShori enabled?
			 * @type {boolean}
			 */
			public kurikaeshiMojiShori: boolean;
			/**
			 * auto leading type
			 * @type {Adobe.Illustrator.AutoLeadingType}
			 */
			public leadingType: Adobe.Illustrator.AutoLeadingType;
			/**
			 * left indent of margin expressed in points
			 * @type {number}
			 */
			public leftIndent: number;
			/**
			 * maximum number of consecutive hypenated lines
			 * @type {number}
			 */
			public maximumConsecutiveHyphens: number;
			/**
			 * maximum glyph scaling expressed as a percentage
			 * @type {number}
			 */
			public maximumGlyphScaling: number;
			/**
			 * maximum letter spacing expressed as a percentage
			 * @type {number}
			 */
			public maximumLetterSpacing: number;
			/**
			 * maximum word spacing expressed as a percentage
			 * @type {number}
			 */
			public maximumWordSpacing: number;
			/**
			 * minimum number of characters after a hyphen
			 * @type {number}
			 */
			public minimumAfterHyphen: number;
			/**
			 * minimum number of characters before a hyphen
			 * @type {number}
			 */
			public minimumBeforeHyphen: number;
			/**
			 * minimum glyph scaling expressed as a percentage
			 * @type {number}
			 */
			public minimumGlyphScaling: number;
			/**
			 * minimum hyphenated word size
			 * @type {number}
			 */
			public minimumHyphenatedWordSize: number;
			/**
			 * minimum letter spacing expressed as a percentage
			 * @type {number}
			 */
			public minimumLetterSpacing: number;
			/**
			 * minimum word spacing expressed as a percentage
			 * @type {number}
			 */
			public minimumWordSpacing: number;
			/**
			 * the Mojikumi name
			 * @type {string}
			 */
			public mojikumi: string;
			/**
			 * right indent of margin expressed in points
			 * @type {number}
			 */
			public rightIndent: number;
			/**
			 * is Roman hanging punctuation enabled?
			 * @type {boolean}
			 */
			public romanHanging: boolean;
			/**
			 * single word justification
			 * @type {Adobe.Illustrator.Justification}
			 */
			public singleWordJustification: Adobe.Illustrator.Justification;
			/**
			 * spacing after paragraph in points
			 * @type {number}
			 */
			public spaceAfter: number;
			/**
			 * spacing before paragraph in points
			 * @type {number}
			 */
			public spaceBefore: number;
			/**
			 * tab stop settings
			 * @type {any[]}
			 */
			public tabStops: any[];
		}
	}
}