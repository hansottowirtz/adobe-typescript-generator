/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class FindTextPreference extends Adobe.Indesign.Preference {
			/**
			 * If true, words unassociated with a hyphenation dictionary 
			 * can break to the next line on any character. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public allowArbitraryHyphenation: any;
			/**
			 * The character style to search for or change to. Can return: 
			 * String or NothingEnum enumerator. Can also accept: 
			 * CharacterStyle.
			 */
			public appliedCharacterStyle: any;
			/**
			 * The conditions to search for or change to. Specify the 
			 * "nothing" enum for "Any" or an empty list for 
			 * "[Unconditional]". Can return: Array of Strings or 
			 * NothingEnum enumerator. Can also accept: Array of 
			 * Conditions.
			 */
			public appliedConditions: any;
			/**
			 * The font applied to the FindTextPreference, specified as 
			 * either a font object or the name of font family. Can return: 
			 * Font, String or NothingEnum enumerator.
			 */
			public appliedFont: any;
			/**
			 * The language to search for or change to. Can return: String 
			 * or NothingEnum enumerator. Can also accept: Language or 
			 * LanguageWithVendors.
			 */
			public appliedLanguage: any;
			/**
			 * The list to be part of. Can return: NumberingList, String or 
			 * NothingEnum enumerator.
			 */
			public appliedNumberingList: any;
			/**
			 * The paragraph style to search for or change to. Can return: 
			 * String or NothingEnum enumerator. Can also accept: 
			 * ParagraphStyle.
			 */
			public appliedParagraphStyle: any;
			/**
			 * The percent of the type size to use for auto leading. 
			 * (Range: 0 to 500). Can return: Real or NothingEnum 
			 * enumerator.
			 */
			public autoLeading: any;
			/**
			 * The number of half-width characters at or below which the 
			 * characters automatically run horizontally in vertical text. 
			 * Can return: Short Integer or NothingEnum enumerator.
			 */
			public autoTcy: any;
			/**
			 * If true, auto tcy includes Roman characters. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public autoTcyIncludeRoman: any;
			/**
			 * If true or set to an enumeration value, balances ragged 
			 * lines. Note: Not valid with a single-line text composer. Can 
			 * return: Boolean, BalanceLinesStyle enumerator or NothingEnum 
			 * enumerator.
			 */
			public balanceRaggedLines: any;
			/**
			 * The baseline shift applied to the text. Can return: Unit or 
			 * NothingEnum enumerator.
			 */
			public baselineShift: any;
			/**
			 * Bullet character. Can return: Bullet or NothingEnum 
			 * enumerator.
			 */
			public readonly bulletChar: any;
			/**
			 * List type for bullets and numbering. Can return: ListType 
			 * enumerator or NothingEnum enumerator.
			 */
			public bulletsAndNumberingListType: any;
			/**
			 * The character style to be used for the text after string. 
			 * Can return: CharacterStyle, String or NothingEnum 
			 * enumerator.
			 */
			public bulletsCharacterStyle: any;
			/**
			 * The text after string expression for bullets. Can return: 
			 * String or NothingEnum enumerator.
			 */
			public bulletsTextAfter: any;
			/**
			 * If true, adds the double period (..), ellipse (...), and 
			 * double hyphen (--) to the selected kinsoku set. Note: Valid 
			 * only when a kinsoku set is in effect. Can return: Boolean or 
			 * NothingEnum enumerator.
			 */
			public bunriKinshi: any;
			/**
			 * The capitalization scheme. Can return: Capitalization 
			 * enumerator or NothingEnum enumerator.
			 */
			public capitalization: any;
			/**
			 * The alignment of small characters to the largest character 
			 * in the line. Can return: CharacterAlignment enumerator or 
			 * NothingEnum enumerator.
			 */
			public characterAlignment: any;
			/**
			 * The direction of the character. Can return: 
			 * CharacterDirectionOptions enumerator or NothingEnum 
			 * enumerator.
			 */
			public characterDirection: any;
			/**
			 * The rotation angle (in degrees) of individual characters. 
			 * Note: The rotation is counterclockwise. Can return: Real or 
			 * NothingEnum enumerator.
			 */
			public characterRotation: any;
			/**
			 * If true, uses grid tracking to track non-Roman characters in 
			 * CJK grids. Can return: Boolean or NothingEnum enumerator.
			 */
			public cjkGridTracking: any;
			/**
			 * The text composer to use to compose the text. Can return: 
			 * String or NothingEnum enumerator.
			 */
			public composer: any;
			/**
			 * Position of diacriticical characters. Can return: 
			 * DiacriticPositionOptions enumerator or NothingEnum 
			 * enumerator.
			 */
			public diacriticPosition: any;
			/**
			 * The digits type. Can return: DigitsTypeOptions enumerator or 
			 * NothingEnum enumerator.
			 */
			public digitsType: any;
			/**
			 * The number of characters to drop cap. Can return: Short 
			 * Integer (0 - 150) or NothingEnum enumerator.
			 */
			public dropCapCharacters: any;
			/**
			 * Details about the drop cap based on the glyph outlines. 1 = 
			 * left side bearing. 2 = descenders. 0x100,0x200,0x400 are 
			 * used for Japanese frame grid. Can return: Long Integer or 
			 * NothingEnum enumerator.
			 */
			public dropcapDetail: any;
			/**
			 * The number of lines to drop cap. Can return: Short Integer 
			 * (0 - 25) or NothingEnum enumerator.
			 */
			public dropCapLines: any;
			/**
			 * The stroke join type applied to the characters of the text. 
			 * Can return: OutlineJoin enumerator or NothingEnum 
			 * enumerator.
			 */
			public endJoin: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The swatch (color, gradient, tint, or mixed ink), applied as 
			 * a fill color, to search for or change to. Can return: String 
			 * or NothingEnum enumerator. Can also accept: Swatch.
			 */
			public fillColor: any;
			/**
			 * The tint (as a percentage) of the fill color of the 
			 * FindTextPreference. (To specify a tint percentage, use a 
			 * number in the range of 0 to 100; to use the inherited or 
			 * overridden value, use -1.). Can return: Real or NothingEnum 
			 * enumerator.
			 */
			public fillTint: any;
			/**
			 * The FindTextPreference to find. Can return: String or 
			 * NothingEnum enumerator.
			 */
			public findWhat: any;
			/**
			 * The amount to indent the first line. Can return: Unit or 
			 * NothingEnum enumerator.
			 */
			public firstLineIndent: any;
			/**
			 * The name of the font style. Can return: String or 
			 * NothingEnum enumerator.
			 */
			public fontStyle: any;
			/**
			 * The glyph variant to substitute for standard glyphs. Can 
			 * return: AlternateGlyphForms enumerator or NothingEnum 
			 * enumerator.
			 */
			public glyphForm: any;
			/**
			 * The angle of a linear gradient applied to the fill of the 
			 * text. (Range: -180 to 180). Can return: Real or NothingEnum 
			 * enumerator.
			 */
			public gradientFillAngle: any;
			/**
			 * The length (for a linear gradient) or radius (for a radial 
			 * gradient) applied to the fill of the text. Can return: Real 
			 * or NothingEnum enumerator.
			 */
			public gradientFillLength: any;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the fill of the text, in the format [x, y]. Can 
			 * return: Array of 2 Units or NothingEnum enumerator.
			 */
			public gradientFillStart: any;
			/**
			 * The angle of a linear gradient applied to the stroke of the 
			 * text. (Range: -180 to 180). Can return: Real or NothingEnum 
			 * enumerator.
			 */
			public gradientStrokeAngle: any;
			/**
			 * The length (for a linear gradient) or radius (for a radial 
			 * gradient) applied to the stroke of the text. Can return: 
			 * Real or NothingEnum enumerator.
			 */
			public gradientStrokeLength: any;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the stroke of the text, in the format [x, y]. Can 
			 * return: Array of 2 Units or NothingEnum enumerator.
			 */
			public gradientStrokeStart: any;
			/**
			 * The alignment to the frame grid or baseline grid. Can 
			 * return: GridAlignment enumerator or NothingEnum enumerator.
			 */
			public gridAlignment: any;
			/**
			 * The manual gyoudori setting. Can return: Short Integer or 
			 * NothingEnum enumerator.
			 */
			public gridGyoudori: any;
			/**
			 * The horizontal scaling applied to the FindTextPreference. 
			 * Can return: Real or NothingEnum enumerator.
			 */
			public horizontalScale: any;
			/**
			 * If true, allows the last word in a text column to be 
			 * hyphenated. Can return: Boolean or NothingEnum enumerator.
			 */
			public hyphenateAcrossColumns: any;
			/**
			 * If true, allows hyphenation in the last word in a paragraph. 
			 * Note: Valid only when hyphenation is true. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public hyphenateLastWord: any;
			/**
			 * If true, ignores optical edge alignment for the paragraph. 
			 * Can return: Boolean or NothingEnum enumerator.
			 */
			public ignoreEdgeAlignment: any;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The number of grid squares in which to arrange the text. . 
			 * Can return: Short Integer or NothingEnum enumerator.
			 */
			public jidori: any;
			/**
			 * The paragraph alignment. Can return: Justification 
			 * enumerator or NothingEnum enumerator.
			 */
			public justification: any;
			/**
			 * Use of Kashidas for justification. Can return: 
			 * KashidasOptions enumerator or NothingEnum enumerator.
			 */
			public kashidas: any;
			/**
			 * If true, keeps all lines of the paragraph together. If 
			 * false, allows paragraphs to break across pages or columns. 
			 * Can return: Boolean or NothingEnum enumerator.
			 */
			public keepAllLinesTogether: any;
			/**
			 * The minimum number of lines to keep together in a paragraph 
			 * before allowing a page break. Can return: Short Integer (1 - 
			 * 50) or NothingEnum enumerator.
			 */
			public keepFirstLines: any;
			/**
			 * The minimum number of lines to keep together in a paragraph 
			 * after a page break. Can return: Short Integer (1 - 50) or 
			 * NothingEnum enumerator.
			 */
			public keepLastLines: any;
			/**
			 * If true, keeps a specified number of lines together when the 
			 * paragraph breaks across columns or text frames. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public keepLinesTogether: any;
			/**
			 * If true, forces the rule above the paragraph to remain in 
			 * the frame bounds. Note: Valid only when rule above is true. 
			 * Can return: Boolean or NothingEnum enumerator.
			 */
			public keepRuleAboveInFrame: any;
			/**
			 * The minimum number of lines to keep with the next paragraph. 
			 * Can return: Short Integer (0 - 5) or NothingEnum enumerator.
			 */
			public keepWithNext: any;
			/**
			 * If the first line in the paragraph should be kept with the 
			 * last line of previous paragraph. Can return: Boolean or 
			 * NothingEnum enumerator.
			 */
			public keepWithPrevious: any;
			/**
			 * The alignment of kenten characters relative to the parent 
			 * characters. . Can return: KentenAlignment enumerator or 
			 * NothingEnum enumerator.
			 */
			public kentenAlignment: any;
			/**
			 * The character set used for the custom kenten character. 
			 * Note: Valid only when kenten kind is custom. . Can return: 
			 * KentenCharacterSet enumerator or NothingEnum enumerator.
			 */
			public kentenCharacterSet: any;
			/**
			 * The character used for kenten. Note: Valid only when kenten 
			 * kind is custom. Can return: String or NothingEnum 
			 * enumerator.
			 */
			public kentenCustomCharacter: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of kenten characters. Can return: Swatch, String or 
			 * NothingEnum enumerator.
			 */
			public kentenFillColor: any;
			/**
			 * The font to use for kenten characters. Can return: Font, 
			 * String or NothingEnum enumerator.
			 */
			public kentenFont: any;
			/**
			 * The size (in points) of kenten characters. Can return: Real 
			 * or NothingEnum enumerator.
			 */
			public kentenFontSize: any;
			/**
			 * The font style of kenten characters. Can return: String or 
			 * NothingEnum enumerator.
			 */
			public kentenFontStyle: any;
			/**
			 * The style of kenten characters. Can return: KentenCharacter 
			 * enumerator or NothingEnum enumerator.
			 */
			public kentenKind: any;
			/**
			 * The method of overprinting the kenten fill. Can return: 
			 * AdornmentOverprint enumerator or NothingEnum enumerator.
			 */
			public kentenOverprintFill: any;
			/**
			 * The method of overprinting the kenten stroke. Can return: 
			 * AdornmentOverprint enumerator or NothingEnum enumerator.
			 */
			public kentenOverprintStroke: any;
			/**
			 * The distance between kenten characters and their parent 
			 * characters. Can return: Real or NothingEnum enumerator.
			 */
			public kentenPlacement: any;
			/**
			 * The kenten position relative to the parent character. Can 
			 * return: RubyKentenPosition enumerator or NothingEnum 
			 * enumerator.
			 */
			public kentenPosition: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of kenten characters. Can return: Swatch, String 
			 * or NothingEnum enumerator.
			 */
			public kentenStrokeColor: any;
			/**
			 * The stroke tint (as a percentage) of kenten characters. 
			 * (Range: 0 to 100). Can return: Real or NothingEnum 
			 * enumerator.
			 */
			public kentenStrokeTint: any;
			/**
			 * The fill tint (as a percentage) of kenten characters. 
			 * (Range: 0 to 100). Can return: Real or NothingEnum 
			 * enumerator.
			 */
			public kentenTint: any;
			/**
			 * The stroke weight (in points) of kenten characters. Can 
			 * return: Real or NothingEnum enumerator.
			 */
			public kentenWeight: any;
			/**
			 * The horizontal size of kenten characters as a percent of the 
			 * original size. Can return: Real or NothingEnum enumerator.
			 */
			public kentenXScale: any;
			/**
			 * The vertical size of kenten charachers as a percent of the 
			 * original size. . Can return: Real or NothingEnum enumerator.
			 */
			public kentenYScale: any;
			/**
			 * The type of pair kerning. Can return: String or NothingEnum 
			 * enumerator.
			 */
			public kerningMethod: any;
			/**
			 * The amount of space to add or remove between characters, 
			 * specified in thousands of an em. . Can return: Real or 
			 * NothingEnum enumerator.
			 */
			public kerningValue: any;
			/**
			 * The keyboard direction of the character. Can return: 
			 * CharacterDirectionOptions enumerator or NothingEnum 
			 * enumerator.
			 */
			public keyboardDirection: any;
			/**
			 * The type of hanging punctuation to allow. Note: Valid only 
			 * when a kinsoku set is in effect. Can return: 
			 * KinsokuHangTypes enumerator or NothingEnum enumerator.
			 */
			public kinsokuHangType: any;
			/**
			 * The kinsoku set that determines legitimate line breaks. Can 
			 * return: KinsokuTable, KinsokuSet enumerator, String or 
			 * NothingEnum enumerator.
			 */
			public kinsokuSet: any;
			/**
			 * The type of kinsoku processing for preventing kinsoku 
			 * characters from beginning or ending a line. Note: Valid only 
			 * when a kinsoku set is defined. Can return: KinsokuType 
			 * enumerator or NothingEnum enumerator.
			 */
			public kinsokuType: any;
			/**
			 * The amount to indent the last line in the paragraph. Can 
			 * return: Unit or NothingEnum enumerator.
			 */
			public lastLineIndent: any;
			/**
			 * The leading applied to the text. Can return: Unit, Leading 
			 * enumerator or NothingEnum enumerator.
			 */
			public leading: any;
			/**
			 * The amount of space before each character. Can return: Real 
			 * or NothingEnum enumerator.
			 */
			public leadingAki: any;
			/**
			 * The point from which leading is measured from line to line. 
			 * Can return: LeadingModel enumerator or NothingEnum 
			 * enumerator.
			 */
			public leadingModel: any;
			/**
			 * The width of the left indent. Can return: Unit or 
			 * NothingEnum enumerator.
			 */
			public leftIndent: any;
			/**
			 * If true, replaces specific character combinations (e.g., fl, 
			 * fi) with ligature characters. Can return: Boolean or 
			 * NothingEnum enumerator.
			 */
			public ligatures: any;
			/**
			 * The limit of the ratio of stroke width to miter length 
			 * before a miter (pointed) join becomes a bevel (squared-off) 
			 * join. Can return: Real (0 - 1000) or NothingEnum enumerator.
			 */
			public miterLimit: any;
			/**
			 * The mojikumi table. For information, see mojikumi table 
			 * defaults. Can return: MojikumiTable, String, 
			 * MojikumiTableDefaults enumerator or NothingEnum enumerator.
			 */
			public mojikumi: any;
			/**
			 * If true, keeps the text on the same line. . Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public noBreak: any;
			/**
			 * If true, apply the numbering restart policy. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public numberingApplyRestartPolicy: any;
			/**
			 * The character style to be used for the number string. Can 
			 * return: CharacterStyle, String or NothingEnum enumerator.
			 */
			public numberingCharacterStyle: any;
			/**
			 * Continue the numbering at this level. Can return: Boolean or 
			 * NothingEnum enumerator.
			 */
			public numberingContinue: any;
			/**
			 * The number string expression for numbering. Can return: 
			 * String or NothingEnum enumerator.
			 */
			public numberingExpression: any;
			/**
			 * Numbering format options. Can return: NumberingStyle 
			 * enumerator, String or NothingEnum enumerator.
			 */
			public numberingFormat: any;
			/**
			 * The level of the paragraph. Can return: Long Integer or 
			 * NothingEnum enumerator.
			 */
			public numberingLevel: any;
			/**
			 * Numbering restart policies. Can return: 
			 * NumberingRestartPolicy or NothingEnum enumerator.
			 */
			public readonly numberingRestartPolicies: any;
			/**
			 * Determines starting number in a numbered list. Can return: 
			 * Long Integer or NothingEnum enumerator.
			 */
			public numberingStartAt: any;
			/**
			 * If true, uses contextual alternate forms in OpenType fonts. 
			 * Can return: Boolean or NothingEnum enumerator.
			 */
			public otfContextualAlternate: any;
			/**
			 * If true, uses discretionary ligatures in OpenType fonts. Can 
			 * return: Boolean or NothingEnum enumerator.
			 */
			public otfDiscretionaryLigature: any;
			/**
			 * The figure style in OpenType fonts. Can return: 
			 * OTFFigureStyle enumerator or NothingEnum enumerator.
			 */
			public otfFigureStyle: any;
			/**
			 * If true, uses fractions in OpenType fonts. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public otfFraction: any;
			/**
			 * If true, use historical forms in OpenType fonts. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public otfHistorical: any;
			/**
			 * If true, switches hiragana fonts, which have different 
			 * glyphs for horizontal and vertical. . Can return: Boolean or 
			 * NothingEnum enumerator.
			 */
			public otfHVKana: any;
			/**
			 * If true, use alternate justification forms in OpenType 
			 * fonts. Can return: Boolean or NothingEnum enumerator.
			 */
			public otfJustificationAlternate: any;
			/**
			 * If true, uses localized forms in OpenType fonts. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public otfLocale: any;
			/**
			 * If true, uses mark positioning in OpenType fonts. Can 
			 * return: Boolean or NothingEnum enumerator.
			 */
			public otfMark: any;
			/**
			 * If true, uses ordinals in OpenType fonts. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public otfOrdinal: any;
			/**
			 * If true, use overlapping swash forms in OpenType fonts. Can 
			 * return: Boolean or NothingEnum enumerator.
			 */
			public otfOverlapSwash: any;
			/**
			 * If true, kerns according to proportional CJK metrics in 
			 * OpenType fonts. Can return: Boolean or NothingEnum 
			 * enumerator.
			 */
			public otfProportionalMetrics: any;
			/**
			 * If true, applies italics to half-width alphanumerics. . Can 
			 * return: Boolean or NothingEnum enumerator.
			 */
			public otfRomanItalics: any;
			/**
			 * If true, use a slashed zeroes in OpenType fonts. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public otfSlashedZero: any;
			/**
			 * If true, use stretched alternate forms in OpenType fonts. 
			 * Can return: Boolean or NothingEnum enumerator.
			 */
			public otfStretchedAlternate: any;
			/**
			 * If true, use stylistic alternate forms in OpenType fonts. 
			 * Can return: Boolean or NothingEnum enumerator.
			 */
			public otfStylisticAlternate: any;
			/**
			 * The stylistic sets to use in OpenType fonts. Can return: 
			 * Long Integer or NothingEnum enumerator.
			 */
			public otfStylisticSets: any;
			/**
			 * If true, uses swash forms in OpenType fonts. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public otfSwash: any;
			/**
			 * If true, uses titling forms in OpenType fonts. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public otfTitling: any;
			/**
			 * If true, the fill color of the characters will overprint. 
			 * Can return: Boolean or NothingEnum enumerator.
			 */
			public overprintFill: any;
			/**
			 * If true, the stroke of the characters will overprint. Can 
			 * return: Boolean or NothingEnum enumerator.
			 */
			public overprintStroke: any;
			/**
			 * Paragraph direction. Can return: ParagraphDirectionOptions 
			 * enumerator or NothingEnum enumerator.
			 */
			public paragraphDirection: any;
			/**
			 * If true, the gyoudori mode applies to the entire paragraph. 
			 * If false, the gyoudori mode applies to each line in the 
			 * paragraph. Can return: Boolean or NothingEnum enumerator.
			 */
			public paragraphGyoudori: any;
			/**
			 * Paragraph justification. Can return: 
			 * ParagraphJustificationOptions enumerator or NothingEnum 
			 * enumerator.
			 */
			public paragraphJustification: any;
			/** The parent of the FindTextPreference (a Application). */
			public readonly parent: any;
			/** The text size. Can return: Unit or NothingEnum enumerator. */
			public pointSize: any;
			/**
			 * The text position relative to the baseline. Can return: 
			 * Position enumerator or NothingEnum enumerator.
			 */
			public position: any;
			/**
			 * The OpenType positional form. Can return: PositionalForms 
			 * enumerator or NothingEnum enumerator.
			 */
			public positionalForm: any;
			/** A collection of preferences objects. */
			public readonly preferences: Adobe.Indesign.Preferences;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * If true, disallows line breaks in numbers. If false, lines 
			 * can break between digits in multi-digit numbers. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public rensuuji: any;
			/**
			 * The width of the right indent. Can return: Unit or 
			 * NothingEnum enumerator.
			 */
			public rightIndent: any;
			/**
			 * If true, rotates Roman characters in vertical text. Can 
			 * return: Boolean or NothingEnum enumerator.
			 */
			public rotateSingleByteCharacters: any;
			/**
			 * The ruby alignment. Can return: RubyAlignments enumerator or 
			 * NothingEnum enumerator.
			 */
			public rubyAlignment: any;
			/**
			 * If true, auto aligns ruby. Can return: Boolean or 
			 * NothingEnum enumerator.
			 */
			public rubyAutoAlign: any;
			/**
			 * If true, automatically scales ruby to the specified percent 
			 * of parent text size. For information on specifying a 
			 * percent, see ruby parent scaling percent. . Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public rubyAutoScaling: any;
			/**
			 * If true, automatically scales glyphs in auto tcy 
			 * (tate-chuu-yoko) in ruby to fit one em. Can return: Boolean 
			 * or NothingEnum enumerator.
			 */
			public rubyAutoTcyAutoScale: any;
			/**
			 * The number of digits included in auto tcy (tate-chuu-yoko) 
			 * in ruby. Can return: Short Integer or NothingEnum 
			 * enumerator.
			 */
			public rubyAutoTcyDigits: any;
			/**
			 * If true, includes Roman characters in auto tcy 
			 * (tate-chuu-yoko) in ruby. Can return: Boolean or NothingEnum 
			 * enumerator.
			 */
			public rubyAutoTcyIncludeRoman: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of ruby characters. Can return: Swatch, String or 
			 * NothingEnum enumerator.
			 */
			public rubyFill: any;
			/**
			 * The font applied to ruby characters. Can return: Font, 
			 * String or NothingEnum enumerator.
			 */
			public rubyFont: any;
			/**
			 * The size (in points) of ruby characters. Can return: Real or 
			 * NothingEnum enumerator.
			 */
			public rubyFontSize: any;
			/**
			 * The font style of ruby characters. Can return: String or 
			 * NothingEnum enumerator.
			 */
			public rubyFontStyle: any;
			/**
			 * If true, uses OpenType Pro fonts for ruby. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public rubyOpenTypePro: any;
			/**
			 * If true, constrains ruby overhang to the specified amount. 
			 * For information on specifying an amount, see ruby parent 
			 * overhang amount. . Can return: Boolean or NothingEnum 
			 * enumerator.
			 */
			public rubyOverhang: any;
			/**
			 * The method of overprinting the ruby fill. Can return: 
			 * AdornmentOverprint enumerator or NothingEnum enumerator.
			 */
			public rubyOverprintFill: any;
			/**
			 * The method of overprinting the ruby stroke. Can return: 
			 * AdornmentOverprint enumerator or NothingEnum enumerator.
			 */
			public rubyOverprintStroke: any;
			/**
			 * The amount by which ruby characters can overhang the parent 
			 * text. Can return: RubyOverhang enumerator or NothingEnum 
			 * enumerator.
			 */
			public rubyParentOverhangAmount: any;
			/**
			 * The amount (as a percentage) to scale the parent text size 
			 * to determine the ruby text size. Can return: Real or 
			 * NothingEnum enumerator.
			 */
			public rubyParentScalingPercent: any;
			/**
			 * The ruby spacing relative to the parent text. . Can return: 
			 * RubyParentSpacing enumerator or NothingEnum enumerator.
			 */
			public rubyParentSpacing: any;
			/**
			 * The position of ruby characters relative to the parent text. 
			 * Can return: RubyKentenPosition enumerator or NothingEnum 
			 * enumerator.
			 */
			public rubyPosition: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of ruby characters. Can return: Swatch, String or 
			 * NothingEnum enumerator.
			 */
			public rubyStroke: any;
			/**
			 * The stroke tint (as a percentage) of ruby characters. Can 
			 * return: Real or NothingEnum enumerator.
			 */
			public rubyStrokeTint: any;
			/**
			 * The tint (as a percentage) of the ruby fill color. (Range: 0 
			 * to 100). Can return: Real or NothingEnum enumerator.
			 */
			public rubyTint: any;
			/**
			 * The ruby type. Can return: RubyTypes enumerator or 
			 * NothingEnum enumerator.
			 */
			public rubyType: any;
			/**
			 * The stroke weight (in points) of ruby characters. Can 
			 * return: Real or NothingEnum enumerator.
			 */
			public rubyWeight: any;
			/**
			 * The amount of horizontal space between ruby and parent 
			 * characters. Can return: Real or NothingEnum enumerator.
			 */
			public rubyXOffset: any;
			/**
			 * The horizontal size of ruby characters, specified as a 
			 * percent of the original size. Can return: Real or 
			 * NothingEnum enumerator.
			 */
			public rubyXScale: any;
			/**
			 * The amount of vertical space between ruby and parent 
			 * characters. Can return: Real or NothingEnum enumerator.
			 */
			public rubyYOffset: any;
			/**
			 * The vertical size of ruby characters, specified as a percent 
			 * of the original size. Can return: Real or NothingEnum 
			 * enumerator.
			 */
			public rubyYScale: any;
			/**
			 * If true, the line changes size when characters are scaled. . 
			 * Can return: Boolean or NothingEnum enumerator.
			 */
			public scaleAffectsLineHeight: any;
			/**
			 * If true, applies shatai rotation. Can return: Boolean or 
			 * NothingEnum enumerator.
			 */
			public shataiAdjustRotation: any;
			/**
			 * If true, adjusts shatai tsume. Can return: Boolean or 
			 * NothingEnum enumerator.
			 */
			public shataiAdjustTsume: any;
			/**
			 * The shatai lens angle (in degrees). Can return: Real or 
			 * NothingEnum enumerator.
			 */
			public shataiDegreeAngle: any;
			/**
			 * The amount (as a percentage) of shatai obliquing to apply. 
			 * Can return: Real or NothingEnum enumerator.
			 */
			public shataiMagnification: any;
			/**
			 * The alignment to use for lines that contain a single word. 
			 * Can return: SingleWordJustification enumerator or 
			 * NothingEnum enumerator.
			 */
			public singleWordJustification: any;
			/**
			 * The skew angle of the FindTextPreference. Can return: Real 
			 * or NothingEnum enumerator.
			 */
			public skew: any;
			/**
			 * The height of the paragraph space below. Can return: Unit or 
			 * NothingEnum enumerator.
			 */
			public spaceAfter: any;
			/**
			 * The height of the paragraph space above. Can return: Unit or 
			 * NothingEnum enumerator.
			 */
			public spaceBefore: any;
			/**
			 * The minimum space after a span or a split column. Can 
			 * return: Unit or NothingEnum enumerator.
			 */
			public spanColumnMinSpaceAfter: any;
			/**
			 * The minimum space before a span or a split column. Can 
			 * return: Unit or NothingEnum enumerator.
			 */
			public spanColumnMinSpaceBefore: any;
			/**
			 * Whether a paragraph should be a single column, span columns 
			 * or split columns. Can return: SpanColumnTypeOptions 
			 * enumerator or NothingEnum enumerator.
			 */
			public spanColumnType: any;
			/**
			 * The number of columns a paragraph spans or the number of 
			 * split columns. Can return: Short Integer (1 - 40), 
			 * SpanColumnCountOptions enumerator or NothingEnum enumerator.
			 */
			public spanSplitColumnCount: any;
			/**
			 * The inside gutter if the paragraph splits columns. Can 
			 * return: Unit or NothingEnum enumerator.
			 */
			public splitColumnInsideGutter: any;
			/**
			 * The outside gutter if the paragraph splits columns. Can 
			 * return: Unit or NothingEnum enumerator.
			 */
			public splitColumnOutsideGutter: any;
			/**
			 * The location at which to start the paragraph. Can return: 
			 * StartParagraph enumerator or NothingEnum enumerator.
			 */
			public startParagraph: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the strikethrough stroke. Can return: Swatch, String or 
			 * NothingEnum enumerator.
			 */
			public strikeThroughColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the strikethrough stroke. Can return: Swatch, 
			 * String or NothingEnum enumerator.
			 */
			public strikeThroughGapColor: any;
			/**
			 * If true, the gap color of the strikethrough stroke will 
			 * overprint. Note: Valid when strike through type is not 
			 * solid. Can return: Boolean or NothingEnum enumerator.
			 */
			public strikeThroughGapOverprint: any;
			/**
			 * The tint (as a percentage) of the strikethrough stroke gap 
			 * color. (Range: 0 to 100) Note: Valid when strike through 
			 * type is not solid. Can return: Real or NothingEnum 
			 * enumerator.
			 */
			public strikeThroughGapTint: any;
			/**
			 * The amount by which to offset the strikethrough stroke from 
			 * the text baseline. Can return: Unit or NothingEnum 
			 * enumerator.
			 */
			public strikeThroughOffset: any;
			/**
			 * If true, the strikethrough stroke will overprint. Can 
			 * return: Boolean or NothingEnum enumerator.
			 */
			public strikeThroughOverprint: any;
			/**
			 * The tint (as a percentage) of the strikethrough stroke. 
			 * (Range: 0 to 100). Can return: Real or NothingEnum 
			 * enumerator.
			 */
			public strikeThroughTint: any;
			/**
			 * The stroke type of the strikethrough stroke. Can return: 
			 * StrokeStyle, String or NothingEnum enumerator.
			 */
			public strikeThroughType: any;
			/**
			 * The stroke weight of the strikethrough stroke. Can return: 
			 * Unit or NothingEnum enumerator.
			 */
			public strikeThroughWeight: any;
			/**
			 * If true, draws a strikethrough line through the text. Can 
			 * return: Boolean or NothingEnum enumerator.
			 */
			public strikeThru: any;
			/**
			 * The stroke alignment applied to the text. Can return: 
			 * TextStrokeAlign enumerator or NothingEnum enumerator.
			 */
			public strokeAlignment: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink), applied as 
			 * a stroke color, to search for or change to. Can return: 
			 * String or NothingEnum enumerator. Can also accept: Swatch.
			 */
			public strokeColor: any;
			/**
			 * The tint (as a percentage) of the stroke color of the 
			 * FindTextPreference. (To specify a tint percentage, use a 
			 * number in the range of 0 to 100; to use the inherited or 
			 * overridden value, use -1.). Can return: Real or NothingEnum 
			 * enumerator.
			 */
			public strokeTint: any;
			/**
			 * The stroke weight applied to the characters of the text. Can 
			 * return: Unit or NothingEnum enumerator.
			 */
			public strokeWeight: any;
			/**
			 * If true, makes the character horizontal in vertical text. 
			 * Can return: Boolean or NothingEnum enumerator.
			 */
			public tatechuyoko: any;
			/**
			 * The horizontal offset for horizontal characters in vertical 
			 * text. Can return: Real or NothingEnum enumerator.
			 */
			public tatechuyokoXOffset: any;
			/**
			 * The vertical offset for horizontal characters in vertical 
			 * text. Can return: Real or NothingEnum enumerator.
			 */
			public tatechuyokoYOffset: any;
			/**
			 * The amount by which to loosen or tighten a block of text, 
			 * specified in thousands of an em. Can return: Real or 
			 * NothingEnum enumerator.
			 */
			public tracking: any;
			/**
			 * The amount of space after each character. Can return: Real 
			 * or NothingEnum enumerator.
			 */
			public trailingAki: any;
			/**
			 * If true, ideographic spaces will not wrap to the next line 
			 * like text characters. Can return: Boolean or NothingEnum 
			 * enumerator.
			 */
			public treatIdeographicSpaceAsSpace: any;
			/**
			 * The amount of horizontal character compression. Can return: 
			 * Real or NothingEnum enumerator.
			 */
			public tsume: any;
			/**
			 * If true, underlines the text. Can return: Boolean or 
			 * NothingEnum enumerator.
			 */
			public underline: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the underline stroke. . Can return: Swatch, String or 
			 * NothingEnum enumerator.
			 */
			public underlineColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the underline stroke. Note: Valid when underline 
			 * type is not solid. Can return: Swatch, String or NothingEnum 
			 * enumerator.
			 */
			public underlineGapColor: any;
			/**
			 * If true, the gap color of the underline stroke will 
			 * overprint. Can return: Boolean or NothingEnum enumerator.
			 */
			public underlineGapOverprint: any;
			/**
			 * The tint (as a percentage) of the gap color of the underline 
			 * stroke. (Range: 0 to 100) Note: Valid when underline type is 
			 * not solid. Can return: Real or NothingEnum enumerator.
			 */
			public underlineGapTint: any;
			/**
			 * The amount by which to offset the underline from the text 
			 * baseline. Can return: Unit or NothingEnum enumerator.
			 */
			public underlineOffset: any;
			/**
			 * If true, the underline stroke color will overprint. Can 
			 * return: Boolean or NothingEnum enumerator.
			 */
			public underlineOverprint: any;
			/**
			 * The underline stroke tint (as a percentage). (Range: 0 to 
			 * 100). Can return: Real or NothingEnum enumerator.
			 */
			public underlineTint: any;
			/**
			 * The stroke type of the underline stroke. Can return: 
			 * StrokeStyle, String or NothingEnum enumerator.
			 */
			public underlineType: any;
			/**
			 * The stroke weight of the underline stroke. Can return: Unit 
			 * or NothingEnum enumerator.
			 */
			public underlineWeight: any;
			/**
			 * The vertical scaling applied to the FindTextPreference. Can 
			 * return: Real or NothingEnum enumerator.
			 */
			public verticalScale: any;
			/**
			 * If true, turns on warichu. Can return: Boolean or 
			 * NothingEnum enumerator.
			 */
			public warichu: any;
			/**
			 * The warichu alignment. Can return: WarichuAlignment 
			 * enumerator or NothingEnum enumerator.
			 */
			public warichuAlignment: any;
			/**
			 * The minimum number of characters allowed after a line break. 
			 * . Can return: Short Integer or NothingEnum enumerator.
			 */
			public warichuCharsAfterBreak: any;
			/**
			 * The minimum number of characters allowed before a line 
			 * break. Can return: Short Integer or NothingEnum enumerator.
			 */
			public warichuCharsBeforeBreak: any;
			/**
			 * The number of lines of warichu within a single normal line. 
			 * Can return: Short Integer or NothingEnum enumerator.
			 */
			public warichuLines: any;
			/**
			 * The gap between lines of warichu characters. Can return: 
			 * Real or NothingEnum enumerator.
			 */
			public warichuLineSpacing: any;
			/**
			 * The amount (as a percentage) to scale parent text size to 
			 * determine warichu size. Can return: Real or NothingEnum 
			 * enumerator.
			 */
			public warichuSize: any;
			/**
			 * The x (horizontal) offset for diacritic adjustment. Can 
			 * return: Real or NothingEnum enumerator.
			 */
			public xOffsetDiacritic: any;
			/**
			 * The y (vertical) offset for diacritic adjustment. Can 
			 * return: Real or NothingEnum enumerator.
			 */
			public yOffsetDiacritic: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerFindTextPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerFindTextPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}