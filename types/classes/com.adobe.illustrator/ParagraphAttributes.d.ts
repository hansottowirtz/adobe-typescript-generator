/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Properties of a paragraph. */
		class ParagraphAttributes extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** Auto leading amount (in percentage) */
			public autoLeadingAmount: number;
			/** Is BunriKinshi enabled? */
			public bunriKinshi: boolean;
			/** The Burasagari type. */
			public burasagariType: Adobe.Illustrator.BurasagariTypeEnum;
			/** Desired glyph scaling expressed as a percentage. */
			public desiredGlyphScaling: number;
			/** Desired letter spacing expressed as a percentage. */
			public desiredLetterSpacing: number;
			/** Desired word spacing expressed as a percentage. */
			public desiredWordSpacing: number;
			/**
			 * Whether to enable every line composer (as opposed to single 
			 * line composer)?
			 */
			public everyLineComposer: boolean;
			/** First line left indent expressed in points. */
			public firstLineIndent: number;
			/** Is hyphenation enabled for the capitalized words? */
			public hyphenateCapitalizedWords: boolean;
			/** Is hyphenation enabled for the paragraph? */
			public hyphenation: boolean;
			/**
			 * Hyphenation preference scale for better spacing (0) or fewer 
			 * hyphens (1) ( 0.0 - 1.0 )
			 */
			public hyphenationPreference: number;
			/** Size of the hyphenation zone. */
			public hyphenationZone: number;
			/** Paragraph justification. */
			public justification: Adobe.Illustrator.Justification;
			/** The Kinsoku Shori name. */
			public kinsoku: string;
			/** The preferred Kinsoku order. */
			public kinsokuOrder: Adobe.Illustrator.KinsokuOrderEnum;
			/** Is KurikaeshiMojiShori enabled? */
			public kurikaeshiMojiShori: boolean;
			/** Auto leading type. */
			public leadingType: Adobe.Illustrator.AutoLeadingType;
			/** Left indent of margin expressed in points. */
			public leftIndent: number;
			/** Maximum number of consecutive hypenated lines. */
			public maximumConsecutiveHyphens: number;
			/** Maximum glyph scaling expressed as a percentage. */
			public maximumGlyphScaling: number;
			/** Maximum letter spacing expressed as a percentage. */
			public maximumLetterSpacing: number;
			/** Maximum word spacing expressed as a percentage. */
			public maximumWordSpacing: number;
			/** Minimum number of characters after a hyphen. */
			public minimumAfterHyphen: number;
			/** Minimum number of characters before a hyphen. */
			public minimumBeforeHyphen: number;
			/** Minimum glyph scaling expressed as a percentage. */
			public minimumGlyphScaling: number;
			/** Minimum hyphenated word size. */
			public minimumHyphenatedWordSize: number;
			/** Minimum letter spacing expressed as a percentage. */
			public minimumLetterSpacing: number;
			/** Minimum word spacing expressed as a percentage. */
			public minimumWordSpacing: number;
			/** The Mojikumi name. */
			public mojikumi: string;
			/** Right indent of margin expressed in points. */
			public rightIndent: number;
			/** Is Roman hanging punctuation enabled? */
			public romanHanging: boolean;
			/** Single word justification. */
			public singleWordJustification: Adobe.Illustrator.Justification;
			/** Spacing after paragraph in points. */
			public spaceAfter: number;
			/** Spacing before paragraph in points. */
			public spaceBefore: number;
			/** Tab stop settings. */
			public tabStops: any[];
		}
	}
}