/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** properties of a paragraph */
		class ParagraphAttributes extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** auto leading amount (in percentage) */
			public autoLeadingAmount: number;
			/** is BunriKinshi enabled? */
			public bunriKinshi: boolean;
			/** the Burasagari type */
			public burasagariType: Adobe.Illustrator.BurasagariTypeEnum;
			/** desired glyph scaling expressed as a percentage */
			public desiredGlyphScaling: number;
			/** desired letter spacing expressed as a percentage */
			public desiredLetterSpacing: number;
			/** desired word spacing expressed as a percentage */
			public desiredWordSpacing: number;
			/**
			 * whether to enable every line composer (as opposed to single 
			 * line composer)?
			 */
			public everyLineComposer: boolean;
			/** first line left indent expressed in points */
			public firstLineIndent: number;
			/** is hyphenation enabled for the capitalized words? */
			public hyphenateCapitalizedWords: boolean;
			/** is hyphenation enabled for the paragraph? */
			public hyphenation: boolean;
			/**
			 * hyphenation preference scale for better spacing (0) or fewer 
			 * hyphens (1) ( 0.0 - 1.0 )
			 */
			public hyphenationPreference: number;
			/** size of the hyphenation zone */
			public hyphenationZone: number;
			/** paragraph justification */
			public justification: Adobe.Illustrator.Justification;
			/** the Kinsoku Shori name */
			public kinsoku: string;
			/** the preferred Kinsoku order */
			public kinsokuOrder: Adobe.Illustrator.KinsokuOrderEnum;
			/** is KurikaeshiMojiShori enabled? */
			public kurikaeshiMojiShori: boolean;
			/** auto leading type */
			public leadingType: Adobe.Illustrator.AutoLeadingType;
			/** left indent of margin expressed in points */
			public leftIndent: number;
			/** maximum number of consecutive hypenated lines */
			public maximumConsecutiveHyphens: number;
			/** maximum glyph scaling expressed as a percentage */
			public maximumGlyphScaling: number;
			/** maximum letter spacing expressed as a percentage */
			public maximumLetterSpacing: number;
			/** maximum word spacing expressed as a percentage */
			public maximumWordSpacing: number;
			/** minimum number of characters after a hyphen */
			public minimumAfterHyphen: number;
			/** minimum number of characters before a hyphen */
			public minimumBeforeHyphen: number;
			/** minimum glyph scaling expressed as a percentage */
			public minimumGlyphScaling: number;
			/** minimum hyphenated word size */
			public minimumHyphenatedWordSize: number;
			/** minimum letter spacing expressed as a percentage */
			public minimumLetterSpacing: number;
			/** minimum word spacing expressed as a percentage */
			public minimumWordSpacing: number;
			/** the Mojikumi name */
			public mojikumi: string;
			/** right indent of margin expressed in points */
			public rightIndent: number;
			/** is Roman hanging punctuation enabled? */
			public romanHanging: boolean;
			/** single word justification */
			public singleWordJustification: Adobe.Illustrator.Justification;
			/** spacing after paragraph in points */
			public spaceAfter: number;
			/** spacing before paragraph in points */
			public spaceBefore: number;
			/** tab stop settings */
			public tabStops: any[];
		}
	}
}