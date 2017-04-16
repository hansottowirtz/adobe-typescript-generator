/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** properties of a character */
		class CharacterAttributes extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the em amount of left aki
			 * @type {number}
			 */
			public akiLeft: number;
			/**
			 * the em amount of right aki amount
			 * @type {number}
			 */
			public akiRight: number;
			/**
			 * the character alignment type
			 * @type {Adobe.Illustrator.StyleRunAlignmentType}
			 */
			public alignment: Adobe.Illustrator.StyleRunAlignmentType;
			/**
			 * the alternate glyphs form
			 * @type {Adobe.Illustrator.AlternateGlyphsForm}
			 */
			public alternateGlyphs: Adobe.Illustrator.AlternateGlyphsForm;
			/**
			 * whether to use automatic leading
			 * @type {boolean}
			 */
			public autoLeading: boolean;
			/**
			 * the Japanese text baseline direction
			 * @type {Adobe.Illustrator.BaselineDirectionType}
			 */
			public baselineDirection: Adobe.Illustrator.BaselineDirectionType;
			/**
			 * the baseline position of text
			 * @type {Adobe.Illustrator.FontBaselineOption}
			 */
			public baselinePosition: Adobe.Illustrator.FontBaselineOption;
			/**
			 * the amount of shift (in points) of the text baseline
			 * @type {number}
			 */
			public baselineShift: number;
			/**
			 * the case of text
			 * @type {Adobe.Illustrator.FontCapsOption}
			 */
			public capitalization: Adobe.Illustrator.FontCapsOption;
			/**
			 * whether the OpenType connection forms should be used
			 * @type {boolean}
			 */
			public connectionForms: boolean;
			/**
			 * whether the contextual ligature should be used
			 * @type {boolean}
			 */
			public contextualLigature: boolean;
			/**
			 * whether the discretionary ligature should be used
			 * @type {boolean}
			 */
			public discretionaryLigature: boolean;
			/**
			 * which figure style to use in OpenType font
			 * @type {Adobe.Illustrator.FigureStyleType}
			 */
			public figureStyle: Adobe.Illustrator.FigureStyleType;
			/**
			 * the color of the text fill
			 * @type {Adobe.Illustrator.Color}
			 */
			public fillColor: Adobe.Illustrator.Color;
			/**
			 * whether the OpenType fractions should be used
			 * @type {boolean}
			 */
			public fractions: boolean;
			/**
			 * character horizontal scaling factor expressed as a 
			 * percentage (100 = 100%)
			 * @type {number}
			 */
			public horizontalScale: number;
			/**
			 * does the Japanese OpenType support italics?
			 * @type {boolean}
			 */
			public italics: boolean;
			/**
			 * the automatic kerning method to use
			 * @type {Adobe.Illustrator.AutoKernType}
			 */
			public kerningMethod: Adobe.Illustrator.AutoKernType;
			/**
			 * the language of text
			 * @type {Adobe.Illustrator.LanguageType}
			 */
			public language: Adobe.Illustrator.LanguageType;
			/**
			 * the amount of space between two lines of text (in points)
			 * @type {number}
			 */
			public leading: number;
			/**
			 * whether the ligature should be used
			 * @type {boolean}
			 */
			public ligature: boolean;
			/**
			 * whether line breaks are allowed
			 * @type {boolean}
			 */
			public noBreak: boolean;
			/**
			 * the OpenType baseline position
			 * @type {Adobe.Illustrator.FontOpenTypePositionOption}
			 */
			public openTypePosition: Adobe.Illustrator.FontOpenTypePositionOption;
			/**
			 * whether the OpenType ordinals should be used
			 * @type {boolean}
			 */
			public ordinals: boolean;
			/**
			 * whether the OpenType ornaments should be used
			 * @type {boolean}
			 */
			public ornaments: boolean;
			/**
			 * whether to overprint the fill of the text
			 * @type {boolean}
			 */
			public overprintFill: boolean;
			/**
			 * whether to overprint the stroke of the text
			 * @type {boolean}
			 */
			public overprintStroke: boolean;
			/**
			 * does the Japanese OpenType support proportional font?
			 * @type {boolean}
			 */
			public proportionalMetrics: boolean;
			/**
			 * the character rotation angle (in degrees)
			 * @type {number}
			 */
			public rotation: number;
			/**
			 * font size in points
			 * @type {number}
			 */
			public size: number;
			/**
			 * whether to draw a strike through line over the text
			 * @type {boolean}
			 */
			public strikeThrough: boolean;
			/**
			 * the color of the text stroke
			 * @type {Adobe.Illustrator.Color}
			 */
			public strokeColor: Adobe.Illustrator.Color;
			/**
			 * line width of stroke
			 * @type {number}
			 */
			public strokeWeight: number;
			/**
			 * whether the OpenType stylistic alternates should be used
			 * @type {boolean}
			 */
			public stylisticAlternates: boolean;
			/**
			 * whether the OpenType swash should be used
			 * @type {boolean}
			 */
			public swash: boolean;
			/**
			 * the Tate-Chu-Yoko horizontal adjustment in points
			 * @type {number}
			 */
			public tateChuYokoHorizontal: number;
			/**
			 * the Tate-Chu-Yoko vertical adjustment in points
			 * @type {number}
			 */
			public tateChuYokoVertical: number;
			/**
			 * the text font
			 * @type {Adobe.Illustrator.TextFont}
			 */
			public textFont: Adobe.Illustrator.TextFont;
			/**
			 * whether the OpenType titling alternates should be used
			 * @type {boolean}
			 */
			public titling: boolean;
			/**
			 * the tracking or range kerning amount in thousands of an em
			 * @type {number}
			 */
			public tracking: number;
			/**
			 * the percentage of space reduction around a Japanese 
			 * character (100 = 100%)
			 * @type {number}
			 */
			public Tsume: number;
			/**
			 * whether to underline the text
			 * @type {boolean}
			 */
			public underline: boolean;
			/**
			 * character vertical scaling factor expressed as a percentage 
			 * (100 = 100%)
			 * @type {number}
			 */
			public verticalScale: number;
			/**
			 * @type {number}
			 */
			public wariChuCharactersAfterBreak: number;
			/**
			 * @type {number}
			 */
			public wariChuCharactersBeforeBreak: number;
			/**
			 * whether WariChu is enabled
			 * @type {boolean}
			 */
			public wariChuEnabled: boolean;
			/**
			 * @type {Adobe.Illustrator.WariChuJustificationType}
			 */
			public wariChuJustification: Adobe.Illustrator.WariChuJustificationType;
			/**
			 * the Wari-Chu line gap
			 * @type {number}
			 */
			public wariChuLineGap: number;
			/**
			 * the number of Wari-Chu (multiple text lines fit into a space 
			 * meant for one) lines
			 * @type {number}
			 */
			public wariChuLines: number;
			/**
			 * the Wari-Chu scale
			 * @type {number}
			 */
			public wariChuScale: number;
		}
	}
}