/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** properties of a character */
		class CharacterAttributes extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** the em amount of left aki */
			public akiLeft: number;
			/** the em amount of right aki amount */
			public akiRight: number;
			/** the character alignment type */
			public alignment: Adobe.Illustrator.StyleRunAlignmentType;
			/** the alternate glyphs form */
			public alternateGlyphs: Adobe.Illustrator.AlternateGlyphsForm;
			/** whether to use automatic leading */
			public autoLeading: boolean;
			/** the Japanese text baseline direction */
			public baselineDirection: Adobe.Illustrator.BaselineDirectionType;
			/** the baseline position of text */
			public baselinePosition: Adobe.Illustrator.FontBaselineOption;
			/** the amount of shift (in points) of the text baseline */
			public baselineShift: number;
			/** the case of text */
			public capitalization: Adobe.Illustrator.FontCapsOption;
			/** whether the OpenType connection forms should be used */
			public connectionForms: boolean;
			/** whether the contextual ligature should be used */
			public contextualLigature: boolean;
			/** whether the discretionary ligature should be used */
			public discretionaryLigature: boolean;
			/** which figure style to use in OpenType font */
			public figureStyle: Adobe.Illustrator.FigureStyleType;
			/** the color of the text fill */
			public fillColor: Adobe.Illustrator.Color;
			/** whether the OpenType fractions should be used */
			public fractions: boolean;
			/**
			 * character horizontal scaling factor expressed as a 
			 * percentage (100 = 100%)
			 */
			public horizontalScale: number;
			/** does the Japanese OpenType support italics? */
			public italics: boolean;
			/** the automatic kerning method to use */
			public kerningMethod: Adobe.Illustrator.AutoKernType;
			/** the language of text */
			public language: Adobe.Illustrator.LanguageType;
			/** the amount of space between two lines of text (in points) */
			public leading: number;
			/** whether the ligature should be used */
			public ligature: boolean;
			/** whether line breaks are allowed */
			public noBreak: boolean;
			/** the OpenType baseline position */
			public openTypePosition: Adobe.Illustrator.FontOpenTypePositionOption;
			/** whether the OpenType ordinals should be used */
			public ordinals: boolean;
			/** whether the OpenType ornaments should be used */
			public ornaments: boolean;
			/** whether to overprint the fill of the text */
			public overprintFill: boolean;
			/** whether to overprint the stroke of the text */
			public overprintStroke: boolean;
			/** does the Japanese OpenType support proportional font? */
			public proportionalMetrics: boolean;
			/** the character rotation angle (in degrees) */
			public rotation: number;
			/** font size in points */
			public size: number;
			/** whether to draw a strike through line over the text */
			public strikeThrough: boolean;
			/** the color of the text stroke */
			public strokeColor: Adobe.Illustrator.Color;
			/** line width of stroke */
			public strokeWeight: number;
			/** whether the OpenType stylistic alternates should be used */
			public stylisticAlternates: boolean;
			/** whether the OpenType swash should be used */
			public swash: boolean;
			/** the Tate-Chu-Yoko horizontal adjustment in points */
			public tateChuYokoHorizontal: number;
			/** the Tate-Chu-Yoko vertical adjustment in points */
			public tateChuYokoVertical: number;
			/** the text font */
			public textFont: Adobe.Illustrator.TextFont;
			/** whether the OpenType titling alternates should be used */
			public titling: boolean;
			/** the tracking or range kerning amount in thousands of an em */
			public tracking: number;
			/**
			 * the percentage of space reduction around a Japanese 
			 * character (100 = 100%)
			 */
			public Tsume: number;
			/** whether to underline the text */
			public underline: boolean;
			/**
			 * character vertical scaling factor expressed as a percentage 
			 * (100 = 100%)
			 */
			public verticalScale: number;
			public wariChuCharactersAfterBreak: number;
			public wariChuCharactersBeforeBreak: number;
			/** whether WariChu is enabled */
			public wariChuEnabled: boolean;
			public wariChuJustification: Adobe.Illustrator.WariChuJustificationType;
			/** the Wari-Chu line gap */
			public wariChuLineGap: number;
			/**
			 * the number of Wari-Chu (multiple text lines fit into a space 
			 * meant for one) lines
			 */
			public wariChuLines: number;
			/** the Wari-Chu scale */
			public wariChuScale: number;
		}
	}
}