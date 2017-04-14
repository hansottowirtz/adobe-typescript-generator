/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class CharacterAttributes extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The em amount of left aki. */
			public akiLeft: number;
			/** The em amount of right aki amount. */
			public akiRight: number;
			/** The character alignment type. */
			public alignment: Adobe.Illustrator.StyleRunAlignmentType;
			/** The alternate glyphs form. */
			public alternateGlyphs: Adobe.Illustrator.AlternateGlyphsForm;
			/** Whether to use automatic leading. */
			public autoLeading: boolean;
			/** The Japanese text baseline direction. */
			public baselineDirection: Adobe.Illustrator.BaselineDirectionType;
			/** The baseline position of text. */
			public baselinePosition: Adobe.Illustrator.FontBaselineOption;
			/** The amount of shift (in points) of the text baseline. */
			public baselineShift: number;
			/** The case of text. */
			public capitalization: Adobe.Illustrator.FontCapsOption;
			/** Whether the OpenType connection forms should be used. */
			public connectionForms: boolean;
			/** Whether the contextual ligature should be used. */
			public contextualLigature: boolean;
			/** Whether the discretionary ligature should be used. */
			public discretionaryLigature: boolean;
			/** Which figure style to use in OpenType font. */
			public figureStyle: Adobe.Illustrator.FigureStyleType;
			/** The color of the text fill. */
			public fillColor: Adobe.Illustrator.Color;
			/** Whether the OpenType fractions should be used. */
			public fractions: boolean;
			/**
			 * Character horizontal scaling factor expressed as a 
			 * percentage (100 = 100%)
			 */
			public horizontalScale: number;
			/** Does the Japanese OpenType support italics? */
			public italics: boolean;
			/** The automatic kerning method to use. */
			public kerningMethod: Adobe.Illustrator.AutoKernType;
			/** The language of text. */
			public language: Adobe.Illustrator.LanguageType;
			/** The amount of space between two lines of text (in points) */
			public leading: number;
			/** Whether the ligature should be used. */
			public ligature: boolean;
			/** Whether line breaks are allowed. */
			public noBreak: boolean;
			/** The OpenType baseline position. */
			public openTypePosition: Adobe.Illustrator.FontOpenTypePositionOption;
			/** Whether the OpenType ordinals should be used. */
			public ordinals: boolean;
			/** Whether the OpenType ornaments should be used. */
			public ornaments: boolean;
			/** Whether to overprint the fill of the text. */
			public overprintFill: boolean;
			/** Whether to overprint the stroke of the text. */
			public overprintStroke: boolean;
			/** Does the Japanese OpenType support proportional font? */
			public proportionalMetrics: boolean;
			/** The character rotation angle (in degrees) */
			public rotation: number;
			/** Font size in points. */
			public size: number;
			/** Whether to draw a strike through line over the text. */
			public strikeThrough: boolean;
			/** The color of the text stroke. */
			public strokeColor: Adobe.Illustrator.Color;
			/** Line width of stroke. */
			public strokeWeight: number;
			/** Whether the OpenType stylistic alternates should be used. */
			public stylisticAlternates: boolean;
			/** Whether the OpenType swash should be used. */
			public swash: boolean;
			/** The Tate-Chu-Yoko horizontal adjustment in points. */
			public tateChuYokoHorizontal: number;
			/** The Tate-Chu-Yoko vertical adjustment in points. */
			public tateChuYokoVertical: number;
			/** The text font. */
			public textFont: Adobe.Illustrator.TextFont;
			/** Whether the OpenType titling alternates should be used. */
			public titling: boolean;
			/** The tracking or range kerning amount in thousands of an em. */
			public tracking: number;
			/**
			 * The percentage of space reduction around a Japanese 
			 * character (100 = 100%)
			 */
			public Tsume: number;
			/** Whether to underline the text. */
			public underline: boolean;
			/**
			 * Character vertical scaling factor expressed as a percentage 
			 * (100 = 100%)
			 */
			public verticalScale: number;
			public wariChuCharactersAfterBreak: number;
			public wariChuCharactersBeforeBreak: number;
			/** Whether WariChu is enabled. */
			public wariChuEnabled: boolean;
			public wariChuJustification: Adobe.Illustrator.WariChuJustificationType;
			/** The Wari-Chu line gap. */
			public wariChuLineGap: number;
			/**
			 * The number of Wari-Chu (multiple text lines fit into a space 
			 * meant for one) lines.
			 */
			public wariChuLines: number;
			/** The Wari-Chu scale. */
			public wariChuScale: number;
		}
	}
}