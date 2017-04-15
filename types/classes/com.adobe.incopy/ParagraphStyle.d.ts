/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ParagraphStyle extends Adobe.Csawlib.CSHostObject {
			/**
			 * If true, aligns the baseline of the text to the baseline 
			 * grid.
			 */
			public alignToBaseline: boolean;
			/**
			 * If true, words unassociated with a hyphenation dictionary 
			 * can break to the next line on any character.
			 */
			public allowArbitraryHyphenation: boolean;
			/**
			 * The font applied to the ParagraphStyle, specified as either 
			 * a font object or the name of font family. Can return: Font 
			 * or String.
			 */
			public appliedFont: any;
			/**
			 * The language of the text. Can return: LanguageWithVendors or 
			 * Language. Can also accept: String.
			 */
			public appliedLanguage: any;
			/**
			 * The list to be part of. Can return: NumberingList or String.
			 */
			public appliedNumberingList: any;
			/**
			 * The percent of the type size to use for auto leading. 
			 * (Range: 0 to 500).
			 */
			public autoLeading: number;
			/**
			 * The number of half-width characters at or below which the 
			 * characters automatically run horizontally in vertical text.
			 */
			public autoTcy: number;
			/** If true, auto tcy includes Roman characters. */
			public autoTcyIncludeRoman: boolean;
			/**
			 * If true or set to an enumeration value, balances ragged 
			 * lines. Note: Not valid with a single-line text composer. Can 
			 * return: Boolean or BalanceLinesStyle enumerator.
			 */
			public balanceRaggedLines: any;
			/**
			 * The style that this style is based on. Can return: 
			 * ParagraphStyle or String.
			 */
			public basedOn: any;
			/** The baseline shift applied to the text. */
			public baselineShift: any;
			/** Bullet character. */
			public readonly bulletChar: Adobe.Incopy.Bullet;
			/** The alignment of the bullet character. */
			public bulletsAlignment: Adobe.Incopy.ListAlignment;
			/** List type for bullets and numbering. */
			public bulletsAndNumberingListType: Adobe.Incopy.ListType;
			/**
			 * The character style to be used for the text after string. 
			 * Can return: CharacterStyle or String.
			 */
			public bulletsCharacterStyle: any;
			/** The text after string expression for bullets. */
			public bulletsTextAfter: string;
			/**
			 * If true, adds the double period (..), ellipse (...), and 
			 * double hyphen (--) to the selected kinsoku set. Note: Valid 
			 * only when a kinsoku set is in effect.
			 */
			public bunriKinshi: boolean;
			/** The capitalization scheme. */
			public capitalization: Adobe.Incopy.Capitalization;
			/**
			 * The alignment of small characters to the largest character 
			 * in the line.
			 */
			public characterAlignment: Adobe.Incopy.CharacterAlignment;
			/** The direction of the character. */
			public characterDirection: Adobe.Incopy.CharacterDirectionOptions;
			/**
			 * The rotation angle (in degrees) of individual characters. 
			 * Note: The rotation is counterclockwise.
			 */
			public characterRotation: number;
			/**
			 * If true, uses grid tracking to track non-Roman characters in 
			 * CJK grids.
			 */
			public cjkGridTracking: boolean;
			/** The text composer to use to compose the text. */
			public composer: string;
			/**
			 * The desired width (as a percentage) of individual 
			 * characters. (Range: 50 to 200)
			 */
			public desiredGlyphScaling: number;
			/**
			 * The desired letter spacing, specified as a percentge of the 
			 * built-in space between letters in the font. (Range: -100 to 
			 * 500)
			 */
			public desiredLetterSpacing: number;
			/**
			 * The desired word spacing, specified as a percentage of the 
			 * font word space value. (Range: 0 to 1000)
			 */
			public desiredWordSpacing: number;
			/** Position of diacriticical characters. */
			public diacriticPosition: Adobe.Incopy.DiacriticPositionOptions;
			/** The digits type. */
			public digitsType: Adobe.Incopy.DigitsTypeOptions;
			/** The number of characters to drop cap. */
			public dropCapCharacters: number;
			/**
			 * Details about the drop cap based on the glyph outlines. 1 = 
			 * left side bearing. 2 = descenders. 0x100,0x200,0x400 are 
			 * used for Japanese frame grid.
			 */
			public dropcapDetail: number;
			/** The number of lines to drop cap. */
			public dropCapLines: number;
			/**
			 * The character style to apply to the drop cap. Can also 
			 * accept: String.
			 */
			public dropCapStyle: Adobe.Incopy.CharacterStyle;
			/** The stroke join type applied to the characters of the text. */
			public endJoin: Adobe.Incopy.OutlineJoin;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of the ParagraphStyle. . Can also accept: String.
			 */
			public fillColor: Adobe.Incopy.Swatch;
			/**
			 * The tint (as a percentage) of the fill color of the 
			 * ParagraphStyle. (To specify a tint percentage, use a number 
			 * in the range of 0 to 100; to use the inherited or overridden 
			 * value, use -1.)
			 */
			public fillTint: number;
			/** The amount to indent the first line. */
			public firstLineIndent: any;
			/** The name of the font style. */
			public fontStyle: string;
			/** The glyph variant to substitute for standard glyphs. */
			public glyphForm: Adobe.Incopy.AlternateGlyphForms;
			/**
			 * The angle of a linear gradient applied to the fill of the 
			 * text. (Range: -180 to 180)
			 */
			public gradientFillAngle: number;
			/**
			 * The length (for a linear gradient) or radius (for a radial 
			 * gradient) applied to the fill of the text.
			 */
			public gradientFillLength: number;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the fill of the text, in the format [x, y].
			 */
			public gradientFillStart: any;
			/**
			 * The angle of a linear gradient applied to the stroke of the 
			 * text. (Range: -180 to 180)
			 */
			public gradientStrokeAngle: number;
			/**
			 * The length (for a linear gradient) or radius (for a radial 
			 * gradient) applied to the stroke of the text.
			 */
			public gradientStrokeLength: number;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the stroke of the text, in the format [x, y].
			 */
			public gradientStrokeStart: any;
			/**
			 * If true, aligns only the first line to the frame grid or 
			 * baseline grid. If false, aligns all lines to the grid.
			 */
			public gridAlignFirstLineOnly: boolean;
			/** The alignment to the frame grid or baseline grid. */
			public gridAlignment: Adobe.Incopy.GridAlignment;
			/** The manual gyoudori setting. */
			public gridGyoudori: number;
			/** The horizontal scaling applied to the ParagraphStyle. */
			public horizontalScale: number;
			/**
			 * If true, allows the last word in a text column to be 
			 * hyphenated.
			 */
			public hyphenateAcrossColumns: boolean;
			/**
			 * The mininum number of letters at the beginning of a word 
			 * that can be broken by a hyphen.
			 */
			public hyphenateAfterFirst: number;
			/**
			 * The minimum number of letters at the end of a word that can 
			 * be broken by a hyphen.
			 */
			public hyphenateBeforeLast: number;
			/** If true, allows hyphenation of capitalized words. */
			public hyphenateCapitalizedWords: boolean;
			/**
			 * The maximum number of hyphens that can appear on consecutive 
			 * lines. To specify unlimited consecutive lines, use zero.
			 */
			public hyphenateLadderLimit: number;
			/**
			 * If true, allows hyphenation in the last word in a paragraph. 
			 * Note: Valid only when hyphenation is true.
			 */
			public hyphenateLastWord: boolean;
			/**
			 * The minimum number of letters a word must have in order to 
			 * qualify for hyphenation.
			 */
			public hyphenateWordsLongerThan: number;
			/** If true, allows hyphenation. */
			public hyphenation: boolean;
			/**
			 * The amount of white space allowed at the end of a line of 
			 * non-justified text before hypenation begins. Note: Valid 
			 * when composer is single-line composer.
			 */
			public hyphenationZone: any;
			/**
			 * The relative desirability of better spacing vs. fewer 
			 * hyphens. A lower value results in greater use of hyphens. 
			 * (Range: 0 to 100)
			 */
			public hyphenWeight: number;
			/** The unique ID of the ParagraphStyle. */
			public readonly id: number;
			/** If true, ignores optical edge alignment for the paragraph. */
			public ignoreEdgeAlignment: boolean;
			/** If true, the style was imported from another document. */
			public readonly imported: boolean;
			/**
			 * The index of the ParagraphStyle within its containing 
			 * object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The number of grid squares in which to arrange the text. */
			public jidori: number;
			/** The paragraph alignment. */
			public justification: Adobe.Incopy.Justification;
			/** Use of Kashidas for justification */
			public kashidas: Adobe.Incopy.KashidasOptions;
			/**
			 * If true, keeps all lines of the paragraph together. If 
			 * false, allows paragraphs to break across pages or columns.
			 */
			public keepAllLinesTogether: boolean;
			/**
			 * The minimum number of lines to keep together in a paragraph 
			 * before allowing a page break.
			 */
			public keepFirstLines: number;
			/**
			 * The minimum number of lines to keep together in a paragraph 
			 * after a page break.
			 */
			public keepLastLines: number;
			/**
			 * If true, keeps a specified number of lines together when the 
			 * paragraph breaks across columns or text frames.
			 */
			public keepLinesTogether: boolean;
			/**
			 * If true, forces the rule above the paragraph to remain in 
			 * the frame bounds. Note: Valid only when rule above is true.
			 */
			public keepRuleAboveInFrame: boolean;
			/**
			 * The minimum number of lines to keep with the next paragraph.
			 */
			public keepWithNext: number;
			/**
			 * If the first line in the paragraph should be kept with the 
			 * last line of previous paragraph.
			 */
			public keepWithPrevious: boolean;
			/**
			 * The alignment of kenten characters relative to the parent 
			 * characters.
			 */
			public kentenAlignment: Adobe.Incopy.KentenAlignment;
			/**
			 * The character set used for the custom kenten character. 
			 * Note: Valid only when kenten kind is custom.
			 */
			public kentenCharacterSet: Adobe.Incopy.KentenCharacterSet;
			/**
			 * The character used for kenten. Note: Valid only when kenten 
			 * kind is custom.
			 */
			public kentenCustomCharacter: string;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of kenten characters. Can return: Swatch or String.
			 */
			public kentenFillColor: any;
			/**
			 * The font to use for kenten characters. Can return: Font or 
			 * String.
			 */
			public kentenFont: any;
			/** The size (in points) of kenten characters. */
			public kentenFontSize: number;
			/**
			 * The font style of kenten characters. Can return: String or 
			 * NothingEnum enumerator.
			 */
			public kentenFontStyle: any;
			/** The style of kenten characters. */
			public kentenKind: Adobe.Incopy.KentenCharacter;
			/** The method of overprinting the kenten fill. */
			public kentenOverprintFill: Adobe.Incopy.AdornmentOverprint;
			/** The method of overprinting the kenten stroke. */
			public kentenOverprintStroke: Adobe.Incopy.AdornmentOverprint;
			/**
			 * The distance between kenten characters and their parent 
			 * characters.
			 */
			public kentenPlacement: number;
			/** The kenten position relative to the parent character. */
			public kentenPosition: Adobe.Incopy.RubyKentenPosition;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of kenten characters. Can return: Swatch or 
			 * String.
			 */
			public kentenStrokeColor: any;
			/**
			 * The stroke tint (as a percentage) of kenten characters. 
			 * (Range: 0 to 100)
			 */
			public kentenStrokeTint: number;
			/**
			 * The fill tint (as a percentage) of kenten characters. 
			 * (Range: 0 to 100)
			 */
			public kentenTint: number;
			/** The stroke weight (in points) of kenten characters. */
			public kentenWeight: number;
			/**
			 * The horizontal size of kenten characters as a percent of the 
			 * original size.
			 */
			public kentenXScale: number;
			/**
			 * The vertical size of kenten charachers as a percent of the 
			 * original size.
			 */
			public kentenYScale: number;
			/** The type of pair kerning. */
			public kerningMethod: string;
			/** The keyboard direction of the character. */
			public keyboardDirection: Adobe.Incopy.CharacterDirectionOptions;
			/**
			 * The type of hanging punctuation to allow. Note: Valid only 
			 * when a kinsoku set is in effect.
			 */
			public kinsokuHangType: Adobe.Incopy.KinsokuHangTypes;
			/**
			 * The kinsoku set that determines legitimate line breaks. Can 
			 * return: KinsokuTable, KinsokuSet enumerator or String.
			 */
			public kinsokuSet: any;
			/**
			 * The type of kinsoku processing for preventing kinsoku 
			 * characters from beginning or ending a line. Note: Valid only 
			 * when a kinsoku set is defined.
			 */
			public kinsokuType: Adobe.Incopy.KinsokuType;
			/** A property that can be set to any string. */
			public label: string;
			/** The amount to indent the last line in the paragraph. */
			public lastLineIndent: any;
			/**
			 * The leading applied to the text. Can return: Unit or Leading 
			 * enumerator.
			 */
			public leading: any;
			/** The amount of space before each character. */
			public leadingAki: number;
			/** The point from which leading is measured from line to line. */
			public leadingModel: Adobe.Incopy.LeadingModel;
			/** The width of the left indent. */
			public leftIndent: any;
			/**
			 * If true, replaces specific character combinations (e.g., fl, 
			 * fi) with ligature characters.
			 */
			public ligatures: boolean;
			/**
			 * The maximum width (as a percentage) of individual 
			 * characters. (Range: 50 to 200)
			 */
			public maximumGlyphScaling: number;
			/**
			 * The maximum letter spacing, specified as a percentge of the 
			 * built-in space between letters in the font. (Range: -100 to 
			 * 500) Note: Valid only when text is justified.
			 */
			public maximumLetterSpacing: number;
			/**
			 * The maximum word spacing, specified as a percentage of the 
			 * font word space value. Note: Valid only when text is 
			 * justified. (Range: 0 to 1000)
			 */
			public maximumWordSpacing: number;
			/**
			 * The minimum width (as a percentage) of individual 
			 * characters. (Range: 50 to 200)
			 */
			public minimumGlyphScaling: number;
			/**
			 * The minimum letter spacing, specified as a percentge of the 
			 * built-in space between letters in the font. (Range: -100 to 
			 * 500) Note: Valid only when text is justified.
			 */
			public minimumLetterSpacing: number;
			/**
			 * The minimum word spacing, specified as a percentage of the 
			 * font word space value. Note: Valid only when text is 
			 * justified. (Range: 0 to 1000)
			 */
			public minimumWordSpacing: number;
			/**
			 * The limit of the ratio of stroke width to miter length 
			 * before a miter (pointed) join becomes a bevel (squared-off) 
			 * join.
			 */
			public miterLimit: number;
			/**
			 * The mojikumi table. For information, see mojikumi table 
			 * defaults. Can return: MojikumiTable, String or 
			 * MojikumiTableDefaults enumerator.
			 */
			public mojikumi: any;
			/** The name of the ParagraphStyle. */
			public name: string;
			/** A collection of nested GREP styles. */
			public readonly nestedGrepStyles: Adobe.Incopy.NestedGrepStyles;
			/** A collection of nested line styles. */
			public readonly nestedLineStyles: Adobe.Incopy.NestedLineStyles;
			/** A collection of nested styles. */
			public readonly nestedStyles: Adobe.Incopy.NestedStyles;
			/**
			 * The style to apply to new paragraphs that follow paragraphs 
			 * tagged with this style.
			 */
			public nextStyle: Adobe.Incopy.ParagraphStyle;
			/** If true, keeps the text on the same line. */
			public noBreak: boolean;
			/** The alignment of the number. */
			public numberingAlignment: Adobe.Incopy.ListAlignment;
			/** If true, apply the numbering restart policy. */
			public numberingApplyRestartPolicy: boolean;
			/**
			 * The character style to be used for the number string. Can 
			 * return: CharacterStyle or String.
			 */
			public numberingCharacterStyle: any;
			/** Continue the numbering at this level. */
			public numberingContinue: boolean;
			/** The number string expression for numbering. */
			public numberingExpression: string;
			/**
			 * Numbering format options. Can return: NumberingStyle 
			 * enumerator or String.
			 */
			public numberingFormat: any;
			/** The level of the paragraph. */
			public numberingLevel: number;
			/** Numbering restart policies. */
			public readonly numberingRestartPolicies: Adobe.Incopy.NumberingRestartPolicy;
			/** Determines starting number in a numbered list. */
			public numberingStartAt: number;
			/** If true, uses contextual alternate forms in OpenType fonts. */
			public otfContextualAlternate: boolean;
			/** If true, uses discretionary ligatures in OpenType fonts. */
			public otfDiscretionaryLigature: boolean;
			/** The figure style in OpenType fonts. */
			public otfFigureStyle: Adobe.Incopy.OTFFigureStyle;
			/** If true, uses fractions in OpenType fonts. */
			public otfFraction: boolean;
			/** If true, use historical forms in OpenType fonts. */
			public otfHistorical: boolean;
			/**
			 * If true, switches hiragana fonts, which have different 
			 * glyphs for horizontal and vertical.
			 */
			public otfHVKana: boolean;
			/**
			 * If true, use alternate justification forms in OpenType fonts
			 */
			public otfJustificationAlternate: boolean;
			/** If true, uses localized forms in OpenType fonts. */
			public otfLocale: boolean;
			/** If true, uses mark positioning in OpenType fonts. */
			public otfMark: boolean;
			/** If true, uses ordinals in OpenType fonts. */
			public otfOrdinal: boolean;
			/** If true, use overlapping swash forms in OpenType fonts */
			public otfOverlapSwash: boolean;
			/**
			 * If true, kerns according to proportional CJK metrics in 
			 * OpenType fonts.
			 */
			public otfProportionalMetrics: boolean;
			/** If true, applies italics to half-width alphanumerics. */
			public otfRomanItalics: boolean;
			/** If true, use a slashed zeroes in OpenType fonts. */
			public otfSlashedZero: boolean;
			/** If true, use stretched alternate forms in OpenType fonts */
			public otfStretchedAlternate: boolean;
			/** If true, use stylistic alternate forms in OpenType fonts */
			public otfStylisticAlternate: boolean;
			/** The stylistic sets to use in OpenType fonts. */
			public otfStylisticSets: number;
			/** If true, uses swash forms in OpenType fonts. */
			public otfSwash: boolean;
			/** If true, uses titling forms in OpenType fonts. */
			public otfTitling: boolean;
			/** If true, the fill color of the characters will overprint. */
			public overprintFill: boolean;
			/** If true, the stroke of the characters will overprint. */
			public overprintStroke: boolean;
			/** Paragraph direction. */
			public paragraphDirection: Adobe.Incopy.ParagraphDirectionOptions;
			/**
			 * If true, the gyoudori mode applies to the entire paragraph. 
			 * If false, the gyoudori mode applies to each line in the 
			 * paragraph.
			 */
			public paragraphGyoudori: boolean;
			/** Paragraph justification. */
			public paragraphJustification: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * The parent of the ParagraphStyle (a Document, Application or 
			 * ParagraphStyleGroup).
			 */
			public readonly parent: any;
			/** The text size. */
			public pointSize: any;
			/** The text position relative to the baseline. */
			public position: Adobe.Incopy.Position;
			/** The OpenType positional form. */
			public positionalForm: Adobe.Incopy.PositionalForms;
			/** A collection of preferences objects. */
			public readonly preferences: Adobe.Incopy.Preferences;
			/**
			 * The color to use for preview, specified either as an array 
			 * of three doubles, each in the range 0 to 255 and 
			 * representing R, G, and B values, or as a UI color. Can 
			 * return: Array of 3 Reals (0 - 255) or UIColors enumerator or 
			 * NothingEnum enumerator.
			 */
			public previewColor: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * If true, disallows line breaks in numbers. If false, lines 
			 * can break between digits in multi-digit numbers.
			 */
			public rensuuji: boolean;
			/** The width of the right indent. */
			public rightIndent: any;
			/** If true, rotates Roman characters in vertical text. */
			public rotateSingleByteCharacters: boolean;
			/** The ruby alignment. */
			public rubyAlignment: Adobe.Incopy.RubyAlignments;
			/** If true, auto aligns ruby. */
			public rubyAutoAlign: boolean;
			/**
			 * If true, automatically scales ruby to the specified percent 
			 * of parent text size. For information on specifying a 
			 * percent, see ruby parent scaling percent.
			 */
			public rubyAutoScaling: boolean;
			/**
			 * If true, automatically scales glyphs in auto tcy 
			 * (tate-chuu-yoko) in ruby to fit one em.
			 */
			public rubyAutoTcyAutoScale: boolean;
			/**
			 * The number of digits included in auto tcy (tate-chuu-yoko) 
			 * in ruby.
			 */
			public rubyAutoTcyDigits: number;
			/**
			 * If true, includes Roman characters in auto tcy 
			 * (tate-chuu-yoko) in ruby.
			 */
			public rubyAutoTcyIncludeRoman: boolean;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of ruby characters. Can return: Swatch or String.
			 */
			public rubyFill: any;
			/**
			 * The font applied to ruby characters. Can return: Font or 
			 * String.
			 */
			public rubyFont: any;
			/** The size (in points) of ruby characters. */
			public rubyFontSize: number;
			/**
			 * The font style of ruby characters. Can return: String or 
			 * NothingEnum enumerator.
			 */
			public rubyFontStyle: any;
			/** If true, uses OpenType Pro fonts for ruby. */
			public rubyOpenTypePro: boolean;
			/**
			 * If true, constrains ruby overhang to the specified amount. 
			 * For information on specifying an amount, see ruby parent 
			 * overhang amount.
			 */
			public rubyOverhang: boolean;
			/** The method of overprinting the ruby fill. */
			public rubyOverprintFill: Adobe.Incopy.AdornmentOverprint;
			/** The method of overprinting the ruby stroke. */
			public rubyOverprintStroke: Adobe.Incopy.AdornmentOverprint;
			/**
			 * The amount by which ruby characters can overhang the parent 
			 * text.
			 */
			public rubyParentOverhangAmount: Adobe.Incopy.RubyOverhang;
			/**
			 * The amount (as a percentage) to scale the parent text size 
			 * to determine the ruby text size.
			 */
			public rubyParentScalingPercent: number;
			/** The ruby spacing relative to the parent text. */
			public rubyParentSpacing: Adobe.Incopy.RubyParentSpacing;
			/**
			 * The position of ruby characters relative to the parent text.
			 */
			public rubyPosition: Adobe.Incopy.RubyKentenPosition;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of ruby characters. Can return: Swatch or String.
			 */
			public rubyStroke: any;
			/** The stroke tint (as a percentage) of ruby characters. */
			public rubyStrokeTint: number;
			/**
			 * The tint (as a percentage) of the ruby fill color. (Range: 0 
			 * to 100)
			 */
			public rubyTint: number;
			/** The ruby type. */
			public rubyType: Adobe.Incopy.RubyTypes;
			/** The stroke weight (in points) of ruby characters. */
			public rubyWeight: number;
			/**
			 * The amount of horizontal space between ruby and parent 
			 * characters.
			 */
			public rubyXOffset: number;
			/**
			 * The horizontal size of ruby characters, specified as a 
			 * percent of the original size.
			 */
			public rubyXScale: number;
			/**
			 * The amount of vertical space between ruby and parent 
			 * characters.
			 */
			public rubyYOffset: number;
			/**
			 * The vertical size of ruby characters, specified as a percent 
			 * of the original size.
			 */
			public rubyYScale: number;
			/** If true, places a rule above the paragraph. */
			public ruleAbove: boolean;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the paragraph rule above. Can return: Swatch or String.
			 */
			public ruleAboveColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke gap of the paragraph rule above. Note: Valid only 
			 * when the paragraph rule above type is not solid. Can return: 
			 * Swatch or String.
			 */
			public ruleAboveGapColor: any;
			/**
			 * If true, the stroke gap of the paragraph rule above will 
			 * overprint. Note: Valid only the rule above type is not 
			 * solid.
			 */
			public ruleAboveGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the stroke gap color of the 
			 * paragraph rule. (Range: 0 to 100) Note: Valid only when the 
			 * rule above type is not solid.
			 */
			public ruleAboveGapTint: number;
			/**
			 * The distance to indent the left edge of the paragraph rule 
			 * above (based on either the text width or the column width of 
			 * the first line in the paragraph.
			 */
			public ruleAboveLeftIndent: any;
			/** The line weight of the rule above. */
			public ruleAboveLineWeight: any;
			/**
			 * The amount to offset the paragraph rule above from the 
			 * baseline of the first line the paragraph.
			 */
			public ruleAboveOffset: any;
			/** If true, the paragraph rule above will overprint. */
			public ruleAboveOverprint: boolean;
			/**
			 * The distance to indent the right edge of the paragraph rule 
			 * above (based on either the text width or the column width of 
			 * the first line in the paragraph.
			 */
			public ruleAboveRightIndent: any;
			/**
			 * The tint (as a percentage) of the paragraph rule above. 
			 * (Range: 0 to 100)
			 */
			public ruleAboveTint: number;
			/**
			 * The stroke type of the rule above the paragraph. Can return: 
			 * StrokeStyle or String.
			 */
			public ruleAboveType: any;
			/**
			 * The basis (text width or column width) used to calculate the 
			 * width of the paragraph rule above.
			 */
			public ruleAboveWidth: Adobe.Incopy.RuleWidth;
			/** If true, applies a paragraph rule below. */
			public ruleBelow: boolean;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the paragraph rule below. Can return: Swatch or String.
			 */
			public ruleBelowColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke gap of the paragraph rule below. Note: Valid only 
			 * when the paragraph rule below type is not solid. Can return: 
			 * Swatch or String.
			 */
			public ruleBelowGapColor: any;
			/** If true, the gap color of the rule below will overprint. */
			public ruleBelowGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the stroke gap color of the 
			 * paragraph rule below. (Range: 0 to 100) Note: Valid only 
			 * when the paragraph rule below type is not solid.
			 */
			public ruleBelowGapTint: number;
			/**
			 * The distance to indent the left edge of the paragraph rule 
			 * below (based on either the text width or the column width of 
			 * the last line in the paragraph.
			 */
			public ruleBelowLeftIndent: any;
			/** The line weight of the rule below. */
			public ruleBelowLineWeight: any;
			/**
			 * The amount to offset the the paragraph rule below from the 
			 * baseline of the last line of the paragraph.
			 */
			public ruleBelowOffset: any;
			/** If true, the rule below will overprint. */
			public ruleBelowOverprint: boolean;
			/**
			 * The distance to indent the right edge of the paragraph rule 
			 * below (based on either the text width or the column width of 
			 * the last line in the paragraph.
			 */
			public ruleBelowRightIndent: any;
			/**
			 * The tint (as a percentage) of the paragraph rule below. 
			 * (Range: 0 to 100)
			 */
			public ruleBelowTint: number;
			/**
			 * The stroke type of the rule below the paragraph. Can return: 
			 * StrokeStyle or String.
			 */
			public ruleBelowType: any;
			/**
			 * The basis (text width or column width) used to calculate the 
			 * width of the paragraph rule below.
			 */
			public ruleBelowWidth: Adobe.Incopy.RuleWidth;
			/** If true, the line changes size when characters are scaled. */
			public scaleAffectsLineHeight: boolean;
			/** If true, applies shatai rotation. */
			public shataiAdjustRotation: boolean;
			/** If true, adjusts shatai tsume. */
			public shataiAdjustTsume: boolean;
			/** The shatai lens angle (in degrees). */
			public shataiDegreeAngle: number;
			/** The amount (as a percentage) of shatai obliquing to apply. */
			public shataiMagnification: number;
			/** The alignment to use for lines that contain a single word. */
			public singleWordJustification: Adobe.Incopy.SingleWordJustification;
			/** The skew angle of the ParagraphStyle. */
			public skew: number;
			/** The height of the paragraph space below. */
			public spaceAfter: any;
			/** The height of the paragraph space above. */
			public spaceBefore: any;
			/** The minimum space after a span or a split column */
			public spanColumnMinSpaceAfter: any;
			/** The minimum space before a span or a split column */
			public spanColumnMinSpaceBefore: any;
			/**
			 * Whether a paragraph should be a single column, span columns 
			 * or split columns
			 */
			public spanColumnType: Adobe.Incopy.SpanColumnTypeOptions;
			/**
			 * The number of columns a paragraph spans or the number of 
			 * split columns. Can return: Short Integer (1 - 40) or 
			 * SpanColumnCountOptions enumerator.
			 */
			public spanSplitColumnCount: any;
			/** The inside gutter if the paragraph splits columns */
			public splitColumnInsideGutter: any;
			/** The outside gutter if the paragraph splits columns */
			public splitColumnOutsideGutter: any;
			/** The location at which to start the paragraph. */
			public startParagraph: Adobe.Incopy.StartParagraph;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the strikethrough stroke. Can return: Swatch or String.
			 */
			public strikeThroughColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the strikethrough stroke. Can return: Swatch or 
			 * String.
			 */
			public strikeThroughGapColor: any;
			/**
			 * If true, the gap color of the strikethrough stroke will 
			 * overprint. Note: Valid when strike through type is not 
			 * solid.
			 */
			public strikeThroughGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the strikethrough stroke gap 
			 * color. (Range: 0 to 100) Note: Valid when strike through 
			 * type is not solid.
			 */
			public strikeThroughGapTint: number;
			/**
			 * The amount by which to offset the strikethrough stroke from 
			 * the text baseline.
			 */
			public strikeThroughOffset: any;
			/** If true, the strikethrough stroke will overprint. */
			public strikeThroughOverprint: boolean;
			/**
			 * The tint (as a percentage) of the strikethrough stroke. 
			 * (Range: 0 to 100)
			 */
			public strikeThroughTint: number;
			/**
			 * The stroke type of the strikethrough stroke. Can return: 
			 * StrokeStyle or String.
			 */
			public strikeThroughType: any;
			/** The stroke weight of the strikethrough stroke. */
			public strikeThroughWeight: any;
			/** If true, draws a strikethrough line through the text. */
			public strikeThru: boolean;
			/** The stroke alignment applied to the text. */
			public strokeAlignment: Adobe.Incopy.TextStrokeAlign;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of the ParagraphStyle. Can also accept: String.
			 */
			public strokeColor: Adobe.Incopy.Swatch;
			/**
			 * The tint (as a percentage) of the stroke color of the 
			 * ParagraphStyle. (To specify a tint percentage, use a number 
			 * in the range of 0 to 100; to use the inherited or overridden 
			 * value, use -1.)
			 */
			public strokeTint: number;
			/** The stroke weight applied to the characters of the text. */
			public strokeWeight: any;
			/**
			 * A list of the tab stops in the paragraph. Can return: Array 
			 * of Arrays of Property Name/Value Pairs.
			 */
			public tabList: any;
			/** A collection of tab stops. */
			public readonly tabStops: Adobe.Incopy.TabStops;
			/** If true, makes the character horizontal in vertical text. */
			public tatechuyoko: boolean;
			/**
			 * The horizontal offset for horizontal characters in vertical 
			 * text.
			 */
			public tatechuyokoXOffset: number;
			/**
			 * The vertical offset for horizontal characters in vertical 
			 * text.
			 */
			public tatechuyokoYOffset: number;
			/**
			 * The amount by which to loosen or tighten a block of text, 
			 * specified in thousands of an em.
			 */
			public tracking: number;
			/** The amount of space after each character. */
			public trailingAki: number;
			/**
			 * If true, ideographic spaces will not wrap to the next line 
			 * like text characters.
			 */
			public treatIdeographicSpaceAsSpace: boolean;
			/** The amount of horizontal character compression. */
			public tsume: number;
			/** If true, underlines the text. */
			public underline: boolean;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the underline stroke. . Can return: Swatch or String.
			 */
			public underlineColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the underline stroke. Note: Valid when underline 
			 * type is not solid. Can return: Swatch or String.
			 */
			public underlineGapColor: any;
			/**
			 * If true, the gap color of the underline stroke will 
			 * overprint.
			 */
			public underlineGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of the underline 
			 * stroke. (Range: 0 to 100) Note: Valid when underline type is 
			 * not solid.
			 */
			public underlineGapTint: number;
			/**
			 * The amount by which to offset the underline from the text 
			 * baseline.
			 */
			public underlineOffset: any;
			/** If true, the underline stroke color will overprint. */
			public underlineOverprint: boolean;
			/**
			 * The underline stroke tint (as a percentage). (Range: 0 to 
			 * 100)
			 */
			public underlineTint: number;
			/**
			 * The stroke type of the underline stroke. Can return: 
			 * StrokeStyle or String.
			 */
			public underlineType: any;
			/** The stroke weight of the underline stroke. */
			public underlineWeight: any;
			/** The vertical scaling applied to the ParagraphStyle. */
			public verticalScale: number;
			/** If true, turns on warichu. */
			public warichu: boolean;
			/** The warichu alignment. */
			public warichuAlignment: Adobe.Incopy.WarichuAlignment;
			/**
			 * The minimum number of characters allowed after a line break.
			 */
			public warichuCharsAfterBreak: number;
			/**
			 * The minimum number of characters allowed before a line 
			 * break.
			 */
			public warichuCharsBeforeBreak: number;
			/** The number of lines of warichu within a single normal line. */
			public warichuLines: number;
			/** The gap between lines of warichu characters. */
			public warichuLineSpacing: number;
			/**
			 * The amount (as a percentage) to scale parent text size to 
			 * determine warichu size.
			 */
			public warichuSize: number;
			/** The x (horizontal) offset for diacritic adjustment. */
			public xOffsetDiacritic: number;
			/** The y (vertical) offset for diacritic adjustment. */
			public yOffsetDiacritic: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerParagraphStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/** Convert bullets and numbering to text. */
			public convertBulletsAndNumberingToText(): void;
			/** Duplicates the ParagraphStyle. */
			public duplicate(): Adobe.Incopy.ParagraphStyle;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam - The key.
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam - The key.
			 * @param {string} valueParam - The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Moves the style to the specified location.
			 * @param {LocationOptions} toParam - The location relative to 
			 * the reference object or within the containing object.
			 * @param {any} referenceParam - The reference object. Note: 
			 * Required when the to parameter specifies before or after. 
			 * Can accept: ParagraphStyle, ParagraphStyleGroup, 
			 * CharacterStyle, CharacterStyleGroup, CellStyle, 
			 * CellStyleGroup, TableStyle, TableStyleGroup, Document or 
			 * Application. (Optional)
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Incopy.ParagraphStyle;
			/**
			 * Deletes the style.
			 * @param {ParagraphStyle} replacingWithParam - The style to 
			 * apply in place of the deleted style. (Optional)
			 */
			public remove(replacingWithParam: ParagraphStyle): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerParagraphStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}