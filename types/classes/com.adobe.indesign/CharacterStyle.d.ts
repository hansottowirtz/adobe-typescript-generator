/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CharacterStyle extends Adobe.Csawlib.CSHostObject {
			/**
			 * The font applied to the CharacterStyle, specified as either 
			 * a font object or the name of font family. Can return: Font, 
			 * String or NothingEnum enumerator.
			 * @type {any}
			 */
			public appliedFont: any;
			/**
			 * The language of the text. Can return: LanguageWithVendors, 
			 * Language or NothingEnum enumerator. Can also accept: String.
			 * @type {any}
			 */
			public appliedLanguage: any;
			/**
			 * The style that this style is based on. Can return: 
			 * CharacterStyle or String.
			 * @type {any}
			 */
			public basedOn: any;
			/**
			 * The baseline shift applied to the text. Can return: Unit or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public baselineShift: any;
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
			 * The direction of the character. Can return: 
			 * CharacterDirectionOptions enumerator or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public characterDirection: any;
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
			 * Position of diacriticical characters. Can return: 
			 * DiacriticPositionOptions enumerator or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public diacriticPosition: any;
			/**
			 * The digits type. Can return: DigitsTypeOptions enumerator or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public digitsType: any;
			/**
			 * The stroke join type applied to the characters of the text. 
			 * Can return: OutlineJoin enumerator or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public endJoin: any;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Indesign.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Indesign.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of the CharacterStyle. . Can return: Swatch or 
			 * NothingEnum enumerator. Can also accept: String.
			 * @type {any}
			 */
			public fillColor: any;
			/**
			 * The tint (as a percentage) of the fill color of the 
			 * CharacterStyle. (To specify a tint percentage, use a number 
			 * in the range of 0 to 100; to use the inherited or overridden 
			 * value, use -1.). Can return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public fillTint: any;
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
			 * The horizontal scaling applied to the CharacterStyle. Can 
			 * return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public horizontalScale: any;
			/**
			 * The unique ID of the CharacterStyle.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * If true, the style was imported from another document. Can 
			 * return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 * @readonly
			 */
			public readonly imported: any;
			/**
			 * The index of the CharacterStyle within its containing 
			 * object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
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
			 * Use of Kashidas for justification. Can return: 
			 * KashidasOptions enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public kashidas: any;
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
			 * The keyboard direction of the character. Can return: 
			 * CharacterDirectionOptions enumerator or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public keyboardDirection: any;
			/**
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
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
			 * If true, replaces specific character combinations (e.g., fl, 
			 * fi) with ligature characters. Can return: Boolean or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public ligatures: any;
			/**
			 * The limit of the ratio of stroke width to miter length 
			 * before a miter (pointed) join becomes a bevel (squared-off) 
			 * join. Can return: Real (0 - 1000) or NothingEnum enumerator.
			 * @type {any}
			 */
			public miterLimit: any;
			/**
			 * The name of the style.
			 * @type {string}
			 */
			public name: string;
			/**
			 * If true, keeps the text on the same line. . Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public noBreak: any;
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
			 * If true, use alternate justification forms in OpenType 
			 * fonts. Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public otfJustificationAlternate: any;
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
			 * If true, use overlapping swash forms in OpenType fonts. Can 
			 * return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public otfOverlapSwash: any;
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
			 * If true, use stretched alternate forms in OpenType fonts. 
			 * Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public otfStretchedAlternate: any;
			/**
			 * If true, use stylistic alternate forms in OpenType fonts. 
			 * Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public otfStylisticAlternate: any;
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
			 * The parent of the CharacterStyle (a Document, Application or 
			 * CharacterStyleGroup).
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
			 * The color to use for preview, specified either as an array 
			 * of three doubles, each in the range 0 to 255 and 
			 * representing R, G, and B values, or as a UI color. Can 
			 * return: Array of 3 Reals (0 - 255) or UIColors enumerator or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public previewColor: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
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
			 * The skew angle of the CharacterStyle. Can return: Real or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public skew: any;
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
			 * The stroke alignment applied to the text. Can return: 
			 * TextStrokeAlign enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public strokeAlignment: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of the CharacterStyle. Can return: Swatch or 
			 * NothingEnum enumerator. Can also accept: String.
			 * @type {any}
			 */
			public strokeColor: any;
			/**
			 * The tint (as a percentage) of the stroke color of the 
			 * CharacterStyle. (To specify a tint percentage, use a number 
			 * in the range of 0 to 100; to use the inherited or overridden 
			 * value, use -1.). Can return: Real or NothingEnum enumerator.
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
			 * A collection of style export tag maps.
			 * @type {Adobe.Indesign.StyleExportTagMaps}
			 * @readonly
			 */
			public readonly styleExportTagMaps: Adobe.Indesign.StyleExportTagMaps;
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
			 * The vertical scaling applied to the CharacterStyle. Can 
			 * return: Real or NothingEnum enumerator.
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
			 * The x (horizontal) offset for diacritic adjustment. Can 
			 * return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public xOffsetDiacritic: any;
			/**
			 * The y (vertical) offset for diacritic adjustment. Can 
			 * return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public yOffsetDiacritic: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerCharacterStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Duplicates the CharacterStyle.
			 * @returns {Adobe.Indesign.CharacterStyle}
			 */
			public duplicate(): Adobe.Indesign.CharacterStyle;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 * @returns {string}
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 * @returns {void}
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Moves the style to the specified location.
			 * @param {LocationOptions} toParam The location relative to 
			 * the reference object or within the containing object.
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the to parameter specifies before or after. 
			 * Can accept: ParagraphStyle, ParagraphStyleGroup, 
			 * CharacterStyle, CharacterStyleGroup, CellStyle, 
			 * CellStyleGroup, TableStyle, TableStyleGroup, Document or 
			 * Application. (Optional)
			 * @returns {Adobe.Indesign.CharacterStyle}
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.CharacterStyle;
			/**
			 * Deletes the style.
			 * @param {CharacterStyle} replacingWithParam The style to 
			 * apply in place of the deleted style. (Optional)
			 * @returns {void}
			 */
			public remove(replacingWithParam: CharacterStyle): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerCharacterStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}