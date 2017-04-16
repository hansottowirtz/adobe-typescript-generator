/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class FindTransliteratePreference extends Adobe.Incopy.Preference {
			/**
			 * If true, words unassociated with a hyphenation dictionary 
			 * can break to the next line on any character. Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public allowArbitraryHyphenation: any;
			/**
			 * The character style to search for or change to. Can return: 
			 * String or NothingEnum enumerator. Can also accept: 
			 * CharacterStyle.
			 * @type {any}
			 */
			public appliedCharacterStyle: any;
			/**
			 * The font applied to the FindTransliteratePreference, 
			 * specified as either a font object or the name of font 
			 * family. Can return: Font, String or NothingEnum enumerator.
			 * @type {any}
			 */
			public appliedFont: any;
			/**
			 * The language to search for or change to. Can return: String 
			 * or NothingEnum enumerator. Can also accept: Language or 
			 * LanguageWithVendors.
			 * @type {any}
			 */
			public appliedLanguage: any;
			/**
			 * The list to be part of. Can return: NumberingList, String or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public appliedNumberingList: any;
			/**
			 * The paragraph style to search for or change to. Can return: 
			 * String or NothingEnum enumerator. Can also accept: 
			 * ParagraphStyle.
			 * @type {any}
			 */
			public appliedParagraphStyle: any;
			/**
			 * The percent of the type size to use for auto leading. 
			 * (Range: 0 to 500). Can return: Real or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public autoLeading: any;
			/**
			 * The number of half-width characters at or below which the 
			 * characters automatically run horizontally in vertical text. 
			 * Can return: Short Integer or NothingEnum enumerator.
			 * @type {any}
			 */
			public autoTcy: any;
			/**
			 * If true, auto tcy includes Roman characters. Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public autoTcyIncludeRoman: any;
			/**
			 * If true or set to an enumeration value, balances ragged 
			 * lines. Note: Not valid with a single-line text composer. Can 
			 * return: Boolean, BalanceLinesStyle enumerator or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public balanceRaggedLines: any;
			/**
			 * The baseline shift applied to the text. Can return: Unit or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public baselineShift: any;
			/**
			 * Bullet character. Can return: Bullet or NothingEnum 
			 * enumerator.
			 * @type {any}
			 * @readonly
			 */
			public readonly bulletChar: any;
			/**
			 * The alignment of the bullet character. Can return: 
			 * ListAlignment enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public bulletsAlignment: any;
			/**
			 * List type for bullets and numbering. Can return: ListType 
			 * enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public bulletsAndNumberingListType: any;
			/**
			 * The character style to be used for the text after string. 
			 * Can return: CharacterStyle, String or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public bulletsCharacterStyle: any;
			/**
			 * The text after string expression for bullets. Can return: 
			 * String or NothingEnum enumerator.
			 * @type {any}
			 */
			public bulletsTextAfter: any;
			/**
			 * If true, adds the double period (..), ellipse (...), and 
			 * double hyphen (--) to the selected kinsoku set. Note: Valid 
			 * only when a kinsoku set is in effect. Can return: Boolean or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public bunriKinshi: any;
			/**
			 * The capitalization scheme. Can return: Capitalization 
			 * enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public capitalization: any;
			/**
			 * The alignment of small characters to the largest character 
			 * in the line. Can return: CharacterAlignment enumerator or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public characterAlignment: any;
			/**
			 * The rotation angle (in degrees) of individual characters. 
			 * Note: The rotation is counterclockwise. Can return: Real or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public characterRotation: any;
			/**
			 * If true, uses grid tracking to track non-Roman characters in 
			 * CJK grids. Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public cjkGridTracking: any;
			/**
			 * The text composer to use to compose the text. Can return: 
			 * String or NothingEnum enumerator.
			 * @type {any}
			 */
			public composer: any;
			/**
			 * The number of characters to drop cap. Can return: Short 
			 * Integer (0 - 150) or NothingEnum enumerator.
			 * @type {any}
			 */
			public dropCapCharacters: any;
			/**
			 * Details about the drop cap based on the glyph outlines. 1 = 
			 * left side bearing. 2 = descenders. 0x100,0x200,0x400 are 
			 * used for Japanese frame grid. Can return: Long Integer or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public dropcapDetail: any;
			/**
			 * The number of lines to drop cap. Can return: Short Integer 
			 * (0 - 25) or NothingEnum enumerator.
			 * @type {any}
			 */
			public dropCapLines: any;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Incopy.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Incopy.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * The swatch (color, gradient, tint, or mixed ink), applied as 
			 * a fill color, to search for or change to. Can return: String 
			 * or NothingEnum enumerator. Can also accept: Swatch.
			 * @type {any}
			 */
			public fillColor: any;
			/**
			 * The tint (as a percentage) of the fill color of the 
			 * FindTransliteratePreference. (To specify a tint percentage, 
			 * use a number in the range of 0 to 100; to use the inherited 
			 * or overridden value, use -1.). Can return: Real or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public fillTint: any;
			/**
			 * The character type to find. Can return: 
			 * FindChangeTransliterateCharacterTypes enumerator or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public findCharacterType: any;
			/**
			 * The amount to indent the first line. Can return: Unit or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public firstLineIndent: any;
			/**
			 * The name of the font style. Can return: String or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public fontStyle: any;
			/**
			 * The glyph variant to substitute for standard glyphs. Can 
			 * return: AlternateGlyphForms enumerator or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public glyphForm: any;
			/**
			 * The angle of a linear gradient applied to the fill of the 
			 * text. (Range: -180 to 180). Can return: Real or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public gradientFillAngle: any;
			/**
			 * The length (for a linear gradient) or radius (for a radial 
			 * gradient) applied to the fill of the text. Can return: Real 
			 * or NothingEnum enumerator.
			 * @type {any}
			 */
			public gradientFillLength: any;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the fill of the text, in the format [x, y]. Can 
			 * return: Array of 2 Units or NothingEnum enumerator.
			 * @type {any}
			 */
			public gradientFillStart: any;
			/**
			 * The angle of a linear gradient applied to the stroke of the 
			 * text. (Range: -180 to 180). Can return: Real or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public gradientStrokeAngle: any;
			/**
			 * The length (for a linear gradient) or radius (for a radial 
			 * gradient) applied to the stroke of the text. Can return: 
			 * Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public gradientStrokeLength: any;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the stroke of the text, in the format [x, y]. Can 
			 * return: Array of 2 Units or NothingEnum enumerator.
			 * @type {any}
			 */
			public gradientStrokeStart: any;
			/**
			 * The alignment to the frame grid or baseline grid. Can 
			 * return: GridAlignment enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public gridAlignment: any;
			/**
			 * The manual gyoudori setting. Can return: Short Integer or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public gridGyoudori: any;
			/**
			 * The horizontal scaling applied to the 
			 * FindTransliteratePreference. Can return: Real or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public horizontalScale: any;
			/**
			 * If true, allows the last word in a text column to be 
			 * hyphenated. Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public hyphenateAcrossColumns: any;
			/**
			 * If true, allows hyphenation in the last word in a paragraph. 
			 * Note: Valid only when hyphenation is true. Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public hyphenateLastWord: any;
			/**
			 * If true, ignores optical edge alignment for the paragraph. 
			 * Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public ignoreEdgeAlignment: any;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The number of grid squares in which to arrange the text. . 
			 * Can return: Short Integer or NothingEnum enumerator.
			 * @type {any}
			 */
			public jidori: any;
			/**
			 * The paragraph alignment. Can return: Justification 
			 * enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public justification: any;
			/**
			 * If true, keeps all lines of the paragraph together. If 
			 * false, allows paragraphs to break across pages or columns. 
			 * Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public keepAllLinesTogether: any;
			/**
			 * The minimum number of lines to keep together in a paragraph 
			 * before allowing a page break. Can return: Short Integer (1 - 
			 * 50) or NothingEnum enumerator.
			 * @type {any}
			 */
			public keepFirstLines: any;
			/**
			 * The minimum number of lines to keep together in a paragraph 
			 * after a page break. Can return: Short Integer (1 - 50) or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public keepLastLines: any;
			/**
			 * If true, keeps a specified number of lines together when the 
			 * paragraph breaks across columns or text frames. Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public keepLinesTogether: any;
			/**
			 * If true, forces the rule above the paragraph to remain in 
			 * the frame bounds. Note: Valid only when rule above is true. 
			 * Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public keepRuleAboveInFrame: any;
			/**
			 * The minimum number of lines to keep with the next paragraph. 
			 * Can return: Short Integer (0 - 5) or NothingEnum enumerator.
			 * @type {any}
			 */
			public keepWithNext: any;
			/**
			 * The alignment of kenten characters relative to the parent 
			 * characters. . Can return: KentenAlignment enumerator or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public kentenAlignment: any;
			/**
			 * The character set used for the custom kenten character. 
			 * Note: Valid only when kenten kind is custom. . Can return: 
			 * KentenCharacterSet enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public kentenCharacterSet: any;
			/**
			 * The character used for kenten. Note: Valid only when kenten 
			 * kind is custom. Can return: String or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public kentenCustomCharacter: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of kenten characters. Can return: Swatch, String or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public kentenFillColor: any;
			/**
			 * The font to use for kenten characters. Can return: Font, 
			 * String or NothingEnum enumerator.
			 * @type {any}
			 */
			public kentenFont: any;
			/**
			 * The size (in points) of kenten characters. Can return: Real 
			 * or NothingEnum enumerator.
			 * @type {any}
			 */
			public kentenFontSize: any;
			/**
			 * The font style of kenten characters. Can return: String or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public kentenFontStyle: any;
			/**
			 * The style of kenten characters. Can return: KentenCharacter 
			 * enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public kentenKind: any;
			/**
			 * The method of overprinting the kenten fill. Can return: 
			 * AdornmentOverprint enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public kentenOverprintFill: any;
			/**
			 * The method of overprinting the kenten stroke. Can return: 
			 * AdornmentOverprint enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public kentenOverprintStroke: any;
			/**
			 * The distance between kenten characters and their parent 
			 * characters. Can return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public kentenPlacement: any;
			/**
			 * The kenten position relative to the parent character. Can 
			 * return: RubyKentenPosition enumerator or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public kentenPosition: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of kenten characters. Can return: Swatch, String 
			 * or NothingEnum enumerator.
			 * @type {any}
			 */
			public kentenStrokeColor: any;
			/**
			 * The stroke tint (as a percentage) of kenten characters. 
			 * (Range: 0 to 100). Can return: Real or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public kentenStrokeTint: any;
			/**
			 * The fill tint (as a percentage) of kenten characters. 
			 * (Range: 0 to 100). Can return: Real or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public kentenTint: any;
			/**
			 * The stroke weight (in points) of kenten characters. Can 
			 * return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public kentenWeight: any;
			/**
			 * The horizontal size of kenten characters as a percent of the 
			 * original size. Can return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public kentenXScale: any;
			/**
			 * The vertical size of kenten charachers as a percent of the 
			 * original size. . Can return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public kentenYScale: any;
			/**
			 * The type of pair kerning. Can return: String or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public kerningMethod: any;
			/**
			 * The amount of space to add or remove between characters, 
			 * specified in thousands of an em. . Can return: Real or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public kerningValue: any;
			/**
			 * The type of hanging punctuation to allow. Note: Valid only 
			 * when a kinsoku set is in effect. Can return: 
			 * KinsokuHangTypes enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public kinsokuHangType: any;
			/**
			 * The kinsoku set that determines legitimate line breaks. Can 
			 * return: KinsokuTable, KinsokuSet enumerator, String or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public kinsokuSet: any;
			/**
			 * The type of kinsoku processing for preventing kinsoku 
			 * characters from beginning or ending a line. Note: Valid only 
			 * when a kinsoku set is defined. Can return: KinsokuType 
			 * enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public kinsokuType: any;
			/**
			 * The amount to indent the last line in the paragraph. Can 
			 * return: Unit or NothingEnum enumerator.
			 * @type {any}
			 */
			public lastLineIndent: any;
			/**
			 * The leading applied to the text. Can return: Unit, Leading 
			 * enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public leading: any;
			/**
			 * The amount of space before each character. Can return: Real 
			 * or NothingEnum enumerator.
			 * @type {any}
			 */
			public leadingAki: any;
			/**
			 * The point from which leading is measured from line to line. 
			 * Can return: LeadingModel enumerator or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public leadingModel: any;
			/**
			 * The width of the left indent. Can return: Unit or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public leftIndent: any;
			/**
			 * If true, replaces specific character combinations (e.g., fl, 
			 * fi) with ligature characters. Can return: Boolean or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public ligatures: any;
			/**
			 * The mojikumi table. For information, see mojikumi table 
			 * defaults. Can return: MojikumiTable, String, 
			 * MojikumiTableDefaults enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public mojikumi: any;
			/**
			 * If true, keeps the text on the same line. . Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public noBreak: any;
			/**
			 * The alignment of the number. Can return: ListAlignment 
			 * enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public numberingAlignment: any;
			/**
			 * If true, apply the numbering restart policy. Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public numberingApplyRestartPolicy: any;
			/**
			 * The character style to be used for the number string. Can 
			 * return: CharacterStyle, String or NothingEnum enumerator.
			 * @type {any}
			 */
			public numberingCharacterStyle: any;
			/**
			 * Continue the numbering at this level. Can return: Boolean or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public numberingContinue: any;
			/**
			 * The number string expression for numbering. Can return: 
			 * String or NothingEnum enumerator.
			 * @type {any}
			 */
			public numberingExpression: any;
			/**
			 * Numbering format options. Can return: NumberingStyle 
			 * enumerator, String or NothingEnum enumerator.
			 * @type {any}
			 */
			public numberingFormat: any;
			/**
			 * The level of the paragraph. Can return: Long Integer or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public numberingLevel: any;
			/**
			 * Determines starting number in a numbered list. Can return: 
			 * Long Integer or NothingEnum enumerator.
			 * @type {any}
			 */
			public numberingStartAt: any;
			/**
			 * If true, uses contextual alternate forms in OpenType fonts. 
			 * Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public otfContextualAlternate: any;
			/**
			 * If true, uses discretionary ligatures in OpenType fonts. Can 
			 * return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public otfDiscretionaryLigature: any;
			/**
			 * The figure style in OpenType fonts. Can return: 
			 * OTFFigureStyle enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public otfFigureStyle: any;
			/**
			 * If true, uses fractions in OpenType fonts. Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public otfFraction: any;
			/**
			 * If true, use historical forms in OpenType fonts. Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public otfHistorical: any;
			/**
			 * If true, switches hiragana fonts, which have different 
			 * glyphs for horizontal and vertical. . Can return: Boolean or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public otfHVKana: any;
			/**
			 * If true, uses localized forms in OpenType fonts. Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public otfLocale: any;
			/**
			 * If true, uses mark positioning in OpenType fonts. Can 
			 * return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public otfMark: any;
			/**
			 * If true, uses ordinals in OpenType fonts. Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public otfOrdinal: any;
			/**
			 * If true, kerns according to proportional CJK metrics in 
			 * OpenType fonts. Can return: Boolean or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public otfProportionalMetrics: any;
			/**
			 * If true, applies italics to half-width alphanumerics. . Can 
			 * return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public otfRomanItalics: any;
			/**
			 * If true, use a slashed zeroes in OpenType fonts. Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public otfSlashedZero: any;
			/**
			 * The stylistic sets to use in OpenType fonts. Can return: 
			 * Long Integer or NothingEnum enumerator.
			 * @type {any}
			 */
			public otfStylisticSets: any;
			/**
			 * If true, uses swash forms in OpenType fonts. Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public otfSwash: any;
			/**
			 * If true, uses titling forms in OpenType fonts. Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public otfTitling: any;
			/**
			 * If true, the fill color of the characters will overprint. 
			 * Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public overprintFill: any;
			/**
			 * If true, the stroke of the characters will overprint. Can 
			 * return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public overprintStroke: any;
			/**
			 * If true, the gyoudori mode applies to the entire paragraph. 
			 * If false, the gyoudori mode applies to each line in the 
			 * paragraph. Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public paragraphGyoudori: any;
			/**
			 * The parent of the FindTransliteratePreference (a 
			 * Application).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * The text size. Can return: Unit or NothingEnum enumerator.
			 * @type {any}
			 */
			public pointSize: any;
			/**
			 * The text position relative to the baseline. Can return: 
			 * Position enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public position: any;
			/**
			 * The OpenType positional form. Can return: PositionalForms 
			 * enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public positionalForm: any;
			/**
			 * A collection of preferences objects.
			 * @type {Adobe.Incopy.Preferences}
			 * @readonly
			 */
			public readonly preferences: Adobe.Incopy.Preferences;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * If true, disallows line breaks in numbers. If false, lines 
			 * can break between digits in multi-digit numbers. Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public rensuuji: any;
			/**
			 * The width of the right indent. Can return: Unit or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public rightIndent: any;
			/**
			 * If true, rotates Roman characters in vertical text. Can 
			 * return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public rotateSingleByteCharacters: any;
			/**
			 * The ruby alignment. Can return: RubyAlignments enumerator or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyAlignment: any;
			/**
			 * If true, auto aligns ruby. Can return: Boolean or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyAutoAlign: any;
			/**
			 * If true, automatically scales ruby to the specified percent 
			 * of parent text size. For information on specifying a 
			 * percent, see ruby parent scaling percent. . Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyAutoScaling: any;
			/**
			 * If true, automatically scales glyphs in auto tcy 
			 * (tate-chuu-yoko) in ruby to fit one em. Can return: Boolean 
			 * or NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyAutoTcyAutoScale: any;
			/**
			 * The number of digits included in auto tcy (tate-chuu-yoko) 
			 * in ruby. Can return: Short Integer or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public rubyAutoTcyDigits: any;
			/**
			 * If true, includes Roman characters in auto tcy 
			 * (tate-chuu-yoko) in ruby. Can return: Boolean or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public rubyAutoTcyIncludeRoman: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of ruby characters. Can return: Swatch, String or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyFill: any;
			/**
			 * The font applied to ruby characters. Can return: Font, 
			 * String or NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyFont: any;
			/**
			 * The size (in points) of ruby characters. Can return: Real or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyFontSize: any;
			/**
			 * The font style of ruby characters. Can return: String or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyFontStyle: any;
			/**
			 * If true, uses OpenType Pro fonts for ruby. Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyOpenTypePro: any;
			/**
			 * If true, constrains ruby overhang to the specified amount. 
			 * For information on specifying an amount, see ruby parent 
			 * overhang amount. . Can return: Boolean or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public rubyOverhang: any;
			/**
			 * The method of overprinting the ruby fill. Can return: 
			 * AdornmentOverprint enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyOverprintFill: any;
			/**
			 * The method of overprinting the ruby stroke. Can return: 
			 * AdornmentOverprint enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyOverprintStroke: any;
			/**
			 * The amount by which ruby characters can overhang the parent 
			 * text. Can return: RubyOverhang enumerator or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public rubyParentOverhangAmount: any;
			/**
			 * The amount (as a percentage) to scale the parent text size 
			 * to determine the ruby text size. Can return: Real or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyParentScalingPercent: any;
			/**
			 * The ruby spacing relative to the parent text. . Can return: 
			 * RubyParentSpacing enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyParentSpacing: any;
			/**
			 * The position of ruby characters relative to the parent text. 
			 * Can return: RubyKentenPosition enumerator or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public rubyPosition: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of ruby characters. Can return: Swatch, String or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyStroke: any;
			/**
			 * The stroke tint (as a percentage) of ruby characters. Can 
			 * return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyStrokeTint: any;
			/**
			 * The tint (as a percentage) of the ruby fill color. (Range: 0 
			 * to 100). Can return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyTint: any;
			/**
			 * The ruby type. Can return: RubyTypes enumerator or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyType: any;
			/**
			 * The stroke weight (in points) of ruby characters. Can 
			 * return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyWeight: any;
			/**
			 * The amount of horizontal space between ruby and parent 
			 * characters. Can return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyXOffset: any;
			/**
			 * The horizontal size of ruby characters, specified as a 
			 * percent of the original size. Can return: Real or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyXScale: any;
			/**
			 * The amount of vertical space between ruby and parent 
			 * characters. Can return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyYOffset: any;
			/**
			 * The vertical size of ruby characters, specified as a percent 
			 * of the original size. Can return: Real or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public rubyYScale: any;
			/**
			 * If true, the line changes size when characters are scaled. . 
			 * Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public scaleAffectsLineHeight: any;
			/**
			 * If true, applies shatai rotation. Can return: Boolean or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public shataiAdjustRotation: any;
			/**
			 * If true, adjusts shatai tsume. Can return: Boolean or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public shataiAdjustTsume: any;
			/**
			 * The shatai lens angle (in degrees). Can return: Real or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public shataiDegreeAngle: any;
			/**
			 * The amount (as a percentage) of shatai obliquing to apply. 
			 * Can return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public shataiMagnification: any;
			/**
			 * The alignment to use for lines that contain a single word. 
			 * Can return: SingleWordJustification enumerator or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public singleWordJustification: any;
			/**
			 * The skew angle of the FindTransliteratePreference. Can 
			 * return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public skew: any;
			/**
			 * The height of the paragraph space below. Can return: Unit or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public spaceAfter: any;
			/**
			 * The height of the paragraph space above. Can return: Unit or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public spaceBefore: any;
			/**
			 * The location at which to start the paragraph. Can return: 
			 * StartParagraph enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public startParagraph: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the strikethrough stroke. Can return: Swatch, String or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public strikeThroughColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the strikethrough stroke. Can return: Swatch, 
			 * String or NothingEnum enumerator.
			 * @type {any}
			 */
			public strikeThroughGapColor: any;
			/**
			 * If true, the gap color of the strikethrough stroke will 
			 * overprint. Note: Valid when strike through type is not 
			 * solid. Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public strikeThroughGapOverprint: any;
			/**
			 * The tint (as a percentage) of the strikethrough stroke gap 
			 * color. (Range: 0 to 100) Note: Valid when strike through 
			 * type is not solid. Can return: Real or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public strikeThroughGapTint: any;
			/**
			 * The amount by which to offset the strikethrough stroke from 
			 * the text baseline. Can return: Unit or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public strikeThroughOffset: any;
			/**
			 * If true, the strikethrough stroke will overprint. Can 
			 * return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public strikeThroughOverprint: any;
			/**
			 * The tint (as a percentage) of the strikethrough stroke. 
			 * (Range: 0 to 100). Can return: Real or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public strikeThroughTint: any;
			/**
			 * The stroke type of the strikethrough stroke. Can return: 
			 * StrokeStyle, String or NothingEnum enumerator.
			 * @type {any}
			 */
			public strikeThroughType: any;
			/**
			 * The stroke weight of the strikethrough stroke. Can return: 
			 * Unit or NothingEnum enumerator.
			 * @type {any}
			 */
			public strikeThroughWeight: any;
			/**
			 * If true, draws a strikethrough line through the text. Can 
			 * return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public strikeThru: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink), applied as 
			 * a stroke color, to search for or change to. Can return: 
			 * String or NothingEnum enumerator. Can also accept: Swatch.
			 * @type {any}
			 */
			public strokeColor: any;
			/**
			 * The tint (as a percentage) of the stroke color of the 
			 * FindTransliteratePreference. (To specify a tint percentage, 
			 * use a number in the range of 0 to 100; to use the inherited 
			 * or overridden value, use -1.). Can return: Real or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public strokeTint: any;
			/**
			 * The stroke weight applied to the characters of the text. Can 
			 * return: Unit or NothingEnum enumerator.
			 * @type {any}
			 */
			public strokeWeight: any;
			/**
			 * If true, makes the character horizontal in vertical text. 
			 * Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public tatechuyoko: any;
			/**
			 * The horizontal offset for horizontal characters in vertical 
			 * text. Can return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public tatechuyokoXOffset: any;
			/**
			 * The vertical offset for horizontal characters in vertical 
			 * text. Can return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public tatechuyokoYOffset: any;
			/**
			 * The amount by which to loosen or tighten a block of text, 
			 * specified in thousands of an em. Can return: Real or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public tracking: any;
			/**
			 * The amount of space after each character. Can return: Real 
			 * or NothingEnum enumerator.
			 * @type {any}
			 */
			public trailingAki: any;
			/**
			 * If true, ideographic spaces will not wrap to the next line 
			 * like text characters. Can return: Boolean or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public treatIdeographicSpaceAsSpace: any;
			/**
			 * The amount of horizontal character compression. Can return: 
			 * Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public tsume: any;
			/**
			 * If true, underlines the text. Can return: Boolean or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public underline: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the underline stroke. . Can return: Swatch, String or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public underlineColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the underline stroke. Note: Valid when underline 
			 * type is not solid. Can return: Swatch, String or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public underlineGapColor: any;
			/**
			 * If true, the gap color of the underline stroke will 
			 * overprint. Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public underlineGapOverprint: any;
			/**
			 * The tint (as a percentage) of the gap color of the underline 
			 * stroke. (Range: 0 to 100) Note: Valid when underline type is 
			 * not solid. Can return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public underlineGapTint: any;
			/**
			 * The amount by which to offset the underline from the text 
			 * baseline. Can return: Unit or NothingEnum enumerator.
			 * @type {any}
			 */
			public underlineOffset: any;
			/**
			 * If true, the underline stroke color will overprint. Can 
			 * return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public underlineOverprint: any;
			/**
			 * The underline stroke tint (as a percentage). (Range: 0 to 
			 * 100). Can return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public underlineTint: any;
			/**
			 * The stroke type of the underline stroke. Can return: 
			 * StrokeStyle, String or NothingEnum enumerator.
			 * @type {any}
			 */
			public underlineType: any;
			/**
			 * The stroke weight of the underline stroke. Can return: Unit 
			 * or NothingEnum enumerator.
			 * @type {any}
			 */
			public underlineWeight: any;
			/**
			 * The vertical scaling applied to the 
			 * FindTransliteratePreference. Can return: Real or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public verticalScale: any;
			/**
			 * If true, turns on warichu. Can return: Boolean or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public warichu: any;
			/**
			 * The warichu alignment. Can return: WarichuAlignment 
			 * enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public warichuAlignment: any;
			/**
			 * The minimum number of characters allowed after a line break. 
			 * . Can return: Short Integer or NothingEnum enumerator.
			 * @type {any}
			 */
			public warichuCharsAfterBreak: any;
			/**
			 * The minimum number of characters allowed before a line 
			 * break. Can return: Short Integer or NothingEnum enumerator.
			 * @type {any}
			 */
			public warichuCharsBeforeBreak: any;
			/**
			 * The number of lines of warichu within a single normal line. 
			 * Can return: Short Integer or NothingEnum enumerator.
			 * @type {any}
			 */
			public warichuLines: any;
			/**
			 * The gap between lines of warichu characters. Can return: 
			 * Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public warichuLineSpacing: any;
			/**
			 * The amount (as a percentage) to scale parent text size to 
			 * determine warichu size. Can return: Real or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public warichuSize: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerFindTransliteratePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerFindTransliteratePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}