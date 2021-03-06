/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Text */
		class Line extends Adobe.Indesign.Text {
			/**
			 * If true, aligns the baseline of the text to the baseline 
			 * grid.
			 * @type {boolean}
			 */
			public alignToBaseline: boolean;
			/**
			 * Lists all graphics contained by the Line.
			 * @type {any}
			 * @readonly
			 */
			public readonly allGraphics: any;
			/**
			 * If true, words unassociated with a hyphenation dictionary 
			 * can break to the next line on any character.
			 * @type {boolean}
			 */
			public allowArbitraryHyphenation: boolean;
			/**
			 * Lists all page items contained by the Line.
			 * @type {any}
			 * @readonly
			 */
			public readonly allPageItems: any;
			/**
			 * The character style applied to the text. Can also accept: 
			 * String.
			 * @type {Adobe.Indesign.CharacterStyle}
			 */
			public appliedCharacterStyle: Adobe.Indesign.CharacterStyle;
			/**
			 * The applied conditions.
			 * @type {any}
			 */
			public appliedConditions: any;
			/**
			 * The font applied to the Line, specified as either a font 
			 * object or the name of font family. Can return: Font or 
			 * String.
			 * @type {any}
			 */
			public appliedFont: any;
			/**
			 * The language of the text. Can return: LanguageWithVendors or 
			 * Language. Can also accept: String.
			 * @type {any}
			 */
			public appliedLanguage: any;
			/**
			 * The applied character styles dictated by nested styles.
			 * @type {any}
			 * @readonly
			 */
			public readonly appliedNestedStyles: any;
			/**
			 * The list to be part of. Can return: NumberingList or String.
			 * @type {any}
			 */
			public appliedNumberingList: any;
			/**
			 * The paragraph style applied to the text. Can also accept: 
			 * String.
			 * @type {Adobe.Indesign.ParagraphStyle}
			 */
			public appliedParagraphStyle: Adobe.Indesign.ParagraphStyle;
			/**
			 * The maximum ascent of any character in the text.
			 * @type {any}
			 * @readonly
			 */
			public readonly ascent: any;
			/**
			 * The XML elements associated with the Line.
			 * @type {any}
			 * @readonly
			 */
			public readonly associatedXMLElements: any;
			/**
			 * The percent of the type size to use for auto leading. 
			 * (Range: 0 to 500).
			 * @type {number}
			 */
			public autoLeading: number;
			/**
			 * The number of half-width characters at or below which the 
			 * characters automatically run horizontally in vertical text.
			 * @type {number}
			 */
			public autoTcy: number;
			/**
			 * If true, auto tcy includes Roman characters.
			 * @type {boolean}
			 */
			public autoTcyIncludeRoman: boolean;
			/**
			 * If true or set to an enumeration value, balances ragged 
			 * lines. Note: Not valid with a single-line text composer. Can 
			 * return: Boolean or BalanceLinesStyle enumerator.
			 * @type {any}
			 */
			public balanceRaggedLines: any;
			/**
			 * The vertical offset of the text.
			 * @type {any}
			 * @readonly
			 */
			public readonly baseline: any;
			/**
			 * The baseline shift applied to the text.
			 * @type {any}
			 */
			public baselineShift: any;
			/**
			 * Bullet character.
			 * @type {Adobe.Indesign.Bullet}
			 * @readonly
			 */
			public readonly bulletChar: Adobe.Indesign.Bullet;
			/**
			 * The alignment of the bullet character.
			 * @type {Adobe.Indesign.ListAlignment}
			 */
			public bulletsAlignment: Adobe.Indesign.ListAlignment;
			/**
			 * List type for bullets and numbering.
			 * @type {Adobe.Indesign.ListType}
			 */
			public bulletsAndNumberingListType: Adobe.Indesign.ListType;
			/**
			 * The character style to be used for the text after string. 
			 * Can return: CharacterStyle or String.
			 * @type {any}
			 */
			public bulletsCharacterStyle: any;
			/**
			 * The text after string expression for bullets.
			 * @type {string}
			 */
			public bulletsTextAfter: string;
			/**
			 * If true, adds the double period (..), ellipse (...), and 
			 * double hyphen (--) to the selected kinsoku set. Note: Valid 
			 * only when a kinsoku set is in effect.
			 * @type {boolean}
			 */
			public bunriKinshi: boolean;
			/**
			 * A collection of buttons.
			 * @type {Adobe.Indesign.Buttons}
			 * @readonly
			 */
			public readonly buttons: Adobe.Indesign.Buttons;
			/**
			 * The capitalization scheme.
			 * @type {Adobe.Indesign.Capitalization}
			 */
			public capitalization: Adobe.Indesign.Capitalization;
			/**
			 * The alignment of small characters to the largest character 
			 * in the line.
			 * @type {Adobe.Indesign.CharacterAlignment}
			 */
			public characterAlignment: Adobe.Indesign.CharacterAlignment;
			/**
			 * The direction of the character.
			 * @type {Adobe.Indesign.CharacterDirectionOptions}
			 */
			public characterDirection: Adobe.Indesign.CharacterDirectionOptions;
			/**
			 * The rotation angle (in degrees) of individual characters. 
			 * Note: The rotation is counterclockwise.
			 * @type {number}
			 */
			public characterRotation: number;
			/**
			 * A collection of characters.
			 * @type {Adobe.Indesign.Characters}
			 * @readonly
			 */
			public readonly characters: Adobe.Indesign.Characters;
			/**
			 * A collection of checkboxes.
			 * @type {Adobe.Indesign.CheckBoxes}
			 * @readonly
			 */
			public readonly checkBoxes: Adobe.Indesign.CheckBoxes;
			/**
			 * If true, uses grid tracking to track non-Roman characters in 
			 * CJK grids.
			 * @type {boolean}
			 */
			public cjkGridTracking: boolean;
			/**
			 * A collection of comboboxes.
			 * @type {Adobe.Indesign.ComboBoxes}
			 * @readonly
			 */
			public readonly comboBoxes: Adobe.Indesign.ComboBoxes;
			/**
			 * The text composer to use to compose the text.
			 * @type {string}
			 */
			public composer: string;
			/**
			 * The contents of the text. Can return: String or 
			 * SpecialCharacters enumerator.
			 * @type {any}
			 */
			public contents: any;
			/**
			 * The maximum descent of any character in the text.
			 * @type {any}
			 * @readonly
			 */
			public readonly descent: any;
			/**
			 * The desired width (as a percentage) of individual 
			 * characters. (Range: 50 to 200)
			 * @type {number}
			 */
			public desiredGlyphScaling: number;
			/**
			 * The desired letter spacing, specified as a percentge of the 
			 * built-in space between letters in the font. (Range: -100 to 
			 * 500)
			 * @type {number}
			 */
			public desiredLetterSpacing: number;
			/**
			 * The desired word spacing, specified as a percentage of the 
			 * font word space value. (Range: 0 to 1000)
			 * @type {number}
			 */
			public desiredWordSpacing: number;
			/**
			 * Position of diacriticical characters.
			 * @type {Adobe.Indesign.DiacriticPositionOptions}
			 */
			public diacriticPosition: Adobe.Indesign.DiacriticPositionOptions;
			/**
			 * The digits type.
			 * @type {Adobe.Indesign.DigitsTypeOptions}
			 */
			public digitsType: Adobe.Indesign.DigitsTypeOptions;
			/**
			 * The number of characters to drop cap.
			 * @type {number}
			 */
			public dropCapCharacters: number;
			/**
			 * Details about the drop cap based on the glyph outlines. 1 = 
			 * left side bearing. 2 = descenders. 0x100,0x200,0x400 are 
			 * used for Japanese frame grid.
			 * @type {number}
			 */
			public dropcapDetail: number;
			/**
			 * The number of lines to drop cap.
			 * @type {number}
			 */
			public dropCapLines: number;
			/**
			 * The character style to apply to the drop cap. Can also 
			 * accept: String.
			 * @type {Adobe.Indesign.CharacterStyle}
			 */
			public dropCapStyle: Adobe.Indesign.CharacterStyle;
			/**
			 * Vertical offset of the end of the text.
			 * @type {any}
			 * @readonly
			 */
			public readonly endBaseline: any;
			/**
			 * Horizontal offset of the end of the text.
			 * @type {any}
			 * @readonly
			 */
			public readonly endHorizontalOffset: any;
			/**
			 * The stroke join type applied to the characters of the text.
			 * @type {Adobe.Indesign.OutlineJoin}
			 */
			public endJoin: Adobe.Indesign.OutlineJoin;
			/**
			 * EPSTexts
			 * @type {Adobe.Indesign.EPSTexts}
			 * @readonly
			 */
			public readonly epstexts: Adobe.Indesign.EPSTexts;
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
			 * the fill of the Line. . Can also accept: String.
			 * @type {Adobe.Indesign.Swatch}
			 */
			public fillColor: Adobe.Indesign.Swatch;
			/**
			 * The tint (as a percentage) of the fill color of the Line. 
			 * (To specify a tint percentage, use a number in the range of 
			 * 0 to 100; to use the inherited or overridden value, use -1.)
			 * @type {number}
			 */
			public fillTint: number;
			/**
			 * The amount to indent the first line.
			 * @type {any}
			 */
			public firstLineIndent: any;
			/**
			 * The name of the font style.
			 * @type {string}
			 */
			public fontStyle: string;
			/**
			 * A collection of footnotes.
			 * @type {Adobe.Indesign.Footnotes}
			 * @readonly
			 */
			public readonly footnotes: Adobe.Indesign.Footnotes;
			/**
			 * A collection of form fields.
			 * @type {Adobe.Indesign.FormFields}
			 * @readonly
			 */
			public readonly formFields: Adobe.Indesign.FormFields;
			/**
			 * The glyph variant to substitute for standard glyphs.
			 * @type {Adobe.Indesign.AlternateGlyphForms}
			 */
			public glyphForm: Adobe.Indesign.AlternateGlyphForms;
			/**
			 * The angle of a linear gradient applied to the fill of the 
			 * text. (Range: -180 to 180)
			 * @type {number}
			 */
			public gradientFillAngle: number;
			/**
			 * The length (for a linear gradient) or radius (for a radial 
			 * gradient) applied to the fill of the text.
			 * @type {number}
			 */
			public gradientFillLength: number;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the fill of the text, in the format [x, y].
			 * @type {any}
			 */
			public gradientFillStart: any;
			/**
			 * The angle of a linear gradient applied to the stroke of the 
			 * text. (Range: -180 to 180)
			 * @type {number}
			 */
			public gradientStrokeAngle: number;
			/**
			 * The length (for a linear gradient) or radius (for a radial 
			 * gradient) applied to the stroke of the text.
			 * @type {number}
			 */
			public gradientStrokeLength: number;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the stroke of the text, in the format [x, y].
			 * @type {any}
			 */
			public gradientStrokeStart: any;
			/**
			 * A collection of graphic lines.
			 * @type {Adobe.Indesign.GraphicLines}
			 * @readonly
			 */
			public readonly graphicLines: Adobe.Indesign.GraphicLines;
			/**
			 * If true, aligns only the first line to the frame grid or 
			 * baseline grid. If false, aligns all lines to the grid.
			 * @type {boolean}
			 */
			public gridAlignFirstLineOnly: boolean;
			/**
			 * The alignment to the frame grid or baseline grid.
			 * @type {Adobe.Indesign.GridAlignment}
			 */
			public gridAlignment: Adobe.Indesign.GridAlignment;
			/**
			 * The manual gyoudori setting.
			 * @type {number}
			 */
			public gridGyoudori: number;
			/**
			 * A collection of groups.
			 * @type {Adobe.Indesign.Groups}
			 * @readonly
			 */
			public readonly groups: Adobe.Indesign.Groups;
			/**
			 * A collection of hidden text objects.
			 * @type {Adobe.Indesign.HiddenTexts}
			 * @readonly
			 */
			public readonly hiddenTexts: Adobe.Indesign.HiddenTexts;
			/**
			 * The horizontal offset of the text.
			 * @type {any}
			 * @readonly
			 */
			public readonly horizontalOffset: any;
			/**
			 * The horizontal scaling applied to the Line.
			 * @type {number}
			 */
			public horizontalScale: number;
			/**
			 * If true, allows the last word in a text column to be 
			 * hyphenated.
			 * @type {boolean}
			 */
			public hyphenateAcrossColumns: boolean;
			/**
			 * The mininum number of letters at the beginning of a word 
			 * that can be broken by a hyphen.
			 * @type {number}
			 */
			public hyphenateAfterFirst: number;
			/**
			 * The minimum number of letters at the end of a word that can 
			 * be broken by a hyphen.
			 * @type {number}
			 */
			public hyphenateBeforeLast: number;
			/**
			 * If true, allows hyphenation of capitalized words.
			 * @type {boolean}
			 */
			public hyphenateCapitalizedWords: boolean;
			/**
			 * The maximum number of hyphens that can appear on consecutive 
			 * lines. To specify unlimited consecutive lines, use zero.
			 * @type {number}
			 */
			public hyphenateLadderLimit: number;
			/**
			 * If true, allows hyphenation in the last word in a paragraph. 
			 * Note: Valid only when hyphenation is true.
			 * @type {boolean}
			 */
			public hyphenateLastWord: boolean;
			/**
			 * The minimum number of letters a word must have in order to 
			 * qualify for hyphenation.
			 * @type {number}
			 */
			public hyphenateWordsLongerThan: number;
			/**
			 * If true, allows hyphenation.
			 * @type {boolean}
			 */
			public hyphenation: boolean;
			/**
			 * The amount of white space allowed at the end of a line of 
			 * non-justified text before hypenation begins. Note: Valid 
			 * when composer is single-line composer.
			 * @type {any}
			 */
			public hyphenationZone: any;
			/**
			 * The relative desirability of better spacing vs. fewer 
			 * hyphens. A lower value results in greater use of hyphens. 
			 * (Range: 0 to 100)
			 * @type {number}
			 */
			public hyphenWeight: number;
			/**
			 * If true, ignores optical edge alignment for the paragraph.
			 * @type {boolean}
			 */
			public ignoreEdgeAlignment: boolean;
			/**
			 * The index of the text in the collection or parent object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * A collection of insertion points.
			 * @type {Adobe.Indesign.InsertionPoints}
			 * @readonly
			 */
			public readonly insertionPoints: Adobe.Indesign.InsertionPoints;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The number of grid squares in which to arrange the text.
			 * @type {number}
			 */
			public jidori: number;
			/**
			 * The paragraph alignment.
			 * @type {Adobe.Indesign.Justification}
			 */
			public justification: Adobe.Indesign.Justification;
			/**
			 * Use of Kashidas for justification
			 * @type {Adobe.Indesign.KashidasOptions}
			 */
			public kashidas: Adobe.Indesign.KashidasOptions;
			/**
			 * If true, keeps all lines of the paragraph together. If 
			 * false, allows paragraphs to break across pages or columns.
			 * @type {boolean}
			 */
			public keepAllLinesTogether: boolean;
			/**
			 * The minimum number of lines to keep together in a paragraph 
			 * before allowing a page break.
			 * @type {number}
			 */
			public keepFirstLines: number;
			/**
			 * The minimum number of lines to keep together in a paragraph 
			 * after a page break.
			 * @type {number}
			 */
			public keepLastLines: number;
			/**
			 * If true, keeps a specified number of lines together when the 
			 * paragraph breaks across columns or text frames.
			 * @type {boolean}
			 */
			public keepLinesTogether: boolean;
			/**
			 * If true, forces the rule above the paragraph to remain in 
			 * the frame bounds. Note: Valid only when rule above is true.
			 * @type {boolean}
			 */
			public keepRuleAboveInFrame: boolean;
			/**
			 * The minimum number of lines to keep with the next paragraph.
			 * @type {number}
			 */
			public keepWithNext: number;
			/**
			 * If the first line in the paragraph should be kept with the 
			 * last line of previous paragraph.
			 * @type {boolean}
			 */
			public keepWithPrevious: boolean;
			/**
			 * The alignment of kenten characters relative to the parent 
			 * characters.
			 * @type {Adobe.Indesign.KentenAlignment}
			 */
			public kentenAlignment: Adobe.Indesign.KentenAlignment;
			/**
			 * The character set used for the custom kenten character. 
			 * Note: Valid only when kenten kind is custom.
			 * @type {Adobe.Indesign.KentenCharacterSet}
			 */
			public kentenCharacterSet: Adobe.Indesign.KentenCharacterSet;
			/**
			 * The character used for kenten. Note: Valid only when kenten 
			 * kind is custom.
			 * @type {string}
			 */
			public kentenCustomCharacter: string;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of kenten characters. Can return: Swatch or String.
			 * @type {any}
			 */
			public kentenFillColor: any;
			/**
			 * The font to use for kenten characters. Can return: Font or 
			 * String.
			 * @type {any}
			 */
			public kentenFont: any;
			/**
			 * The size (in points) of kenten characters.
			 * @type {number}
			 */
			public kentenFontSize: number;
			/**
			 * The font style of kenten characters. Can return: String or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public kentenFontStyle: any;
			/**
			 * The style of kenten characters.
			 * @type {Adobe.Indesign.KentenCharacter}
			 */
			public kentenKind: Adobe.Indesign.KentenCharacter;
			/**
			 * The method of overprinting the kenten fill.
			 * @type {Adobe.Indesign.AdornmentOverprint}
			 */
			public kentenOverprintFill: Adobe.Indesign.AdornmentOverprint;
			/**
			 * The method of overprinting the kenten stroke.
			 * @type {Adobe.Indesign.AdornmentOverprint}
			 */
			public kentenOverprintStroke: Adobe.Indesign.AdornmentOverprint;
			/**
			 * The distance between kenten characters and their parent 
			 * characters.
			 * @type {number}
			 */
			public kentenPlacement: number;
			/**
			 * The kenten position relative to the parent character.
			 * @type {Adobe.Indesign.RubyKentenPosition}
			 */
			public kentenPosition: Adobe.Indesign.RubyKentenPosition;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of kenten characters. Can return: Swatch or 
			 * String.
			 * @type {any}
			 */
			public kentenStrokeColor: any;
			/**
			 * The stroke tint (as a percentage) of kenten characters. 
			 * (Range: 0 to 100)
			 * @type {number}
			 */
			public kentenStrokeTint: number;
			/**
			 * The fill tint (as a percentage) of kenten characters. 
			 * (Range: 0 to 100)
			 * @type {number}
			 */
			public kentenTint: number;
			/**
			 * The stroke weight (in points) of kenten characters.
			 * @type {number}
			 */
			public kentenWeight: number;
			/**
			 * The horizontal size of kenten characters as a percent of the 
			 * original size.
			 * @type {number}
			 */
			public kentenXScale: number;
			/**
			 * The vertical size of kenten charachers as a percent of the 
			 * original size.
			 * @type {number}
			 */
			public kentenYScale: number;
			/**
			 * The type of pair kerning.
			 * @type {string}
			 */
			public kerningMethod: string;
			/**
			 * The amount of space to add or remove between characters, 
			 * specified in thousands of an em.
			 * @type {number}
			 */
			public kerningValue: number;
			/**
			 * The keyboard direction of the character.
			 * @type {Adobe.Indesign.CharacterDirectionOptions}
			 */
			public keyboardDirection: Adobe.Indesign.CharacterDirectionOptions;
			/**
			 * The type of hanging punctuation to allow. Note: Valid only 
			 * when a kinsoku set is in effect.
			 * @type {Adobe.Indesign.KinsokuHangTypes}
			 */
			public kinsokuHangType: Adobe.Indesign.KinsokuHangTypes;
			/**
			 * The kinsoku set that determines legitimate line breaks. Can 
			 * return: KinsokuTable, KinsokuSet enumerator or String.
			 * @type {any}
			 */
			public kinsokuSet: any;
			/**
			 * The type of kinsoku processing for preventing kinsoku 
			 * characters from beginning or ending a line. Note: Valid only 
			 * when a kinsoku set is defined.
			 * @type {Adobe.Indesign.KinsokuType}
			 */
			public kinsokuType: Adobe.Indesign.KinsokuType;
			/**
			 * The amount to indent the last line in the paragraph.
			 * @type {any}
			 */
			public lastLineIndent: any;
			/**
			 * The leading applied to the text. Can return: Unit or Leading 
			 * enumerator.
			 * @type {any}
			 */
			public leading: any;
			/**
			 * The amount of space before each character.
			 * @type {number}
			 */
			public leadingAki: number;
			/**
			 * The point from which leading is measured from line to line.
			 * @type {Adobe.Indesign.LeadingModel}
			 */
			public leadingModel: Adobe.Indesign.LeadingModel;
			/**
			 * The width of the left indent.
			 * @type {any}
			 */
			public leftIndent: any;
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * If true, replaces specific character combinations (e.g., fl, 
			 * fi) with ligature characters.
			 * @type {boolean}
			 */
			public ligatures: boolean;
			/**
			 * A collection of lines.
			 * @type {Adobe.Indesign.Lines}
			 * @readonly
			 */
			public readonly lines: Adobe.Indesign.Lines;
			/**
			 * A collection of listboxes.
			 * @type {Adobe.Indesign.ListBoxes}
			 * @readonly
			 */
			public readonly listBoxes: Adobe.Indesign.ListBoxes;
			/**
			 * The maximum width (as a percentage) of individual 
			 * characters. (Range: 50 to 200)
			 * @type {number}
			 */
			public maximumGlyphScaling: number;
			/**
			 * The maximum letter spacing, specified as a percentge of the 
			 * built-in space between letters in the font. (Range: -100 to 
			 * 500) Note: Valid only when text is justified.
			 * @type {number}
			 */
			public maximumLetterSpacing: number;
			/**
			 * The maximum word spacing, specified as a percentage of the 
			 * font word space value. Note: Valid only when text is 
			 * justified. (Range: 0 to 1000)
			 * @type {number}
			 */
			public maximumWordSpacing: number;
			/**
			 * The minimum width (as a percentage) of individual 
			 * characters. (Range: 50 to 200)
			 * @type {number}
			 */
			public minimumGlyphScaling: number;
			/**
			 * The minimum letter spacing, specified as a percentge of the 
			 * built-in space between letters in the font. (Range: -100 to 
			 * 500) Note: Valid only when text is justified.
			 * @type {number}
			 */
			public minimumLetterSpacing: number;
			/**
			 * The minimum word spacing, specified as a percentage of the 
			 * font word space value. Note: Valid only when text is 
			 * justified. (Range: 0 to 1000)
			 * @type {number}
			 */
			public minimumWordSpacing: number;
			/**
			 * The limit of the ratio of stroke width to miter length 
			 * before a miter (pointed) join becomes a bevel (squared-off) 
			 * join.
			 * @type {number}
			 */
			public miterLimit: number;
			/**
			 * The mojikumi table. For information, see mojikumi table 
			 * defaults. Can return: MojikumiTable, String or 
			 * MojikumiTableDefaults enumerator.
			 * @type {any}
			 */
			public mojikumi: any;
			/**
			 * A collection of multi-state objects.
			 * @type {Adobe.Indesign.MultiStateObjects}
			 * @readonly
			 */
			public readonly multiStateObjects: Adobe.Indesign.MultiStateObjects;
			/**
			 * A collection of nested GREP styles.
			 * @type {Adobe.Indesign.NestedGrepStyles}
			 * @readonly
			 */
			public readonly nestedGrepStyles: Adobe.Indesign.NestedGrepStyles;
			/**
			 * A collection of nested line styles.
			 * @type {Adobe.Indesign.NestedLineStyles}
			 * @readonly
			 */
			public readonly nestedLineStyles: Adobe.Indesign.NestedLineStyles;
			/**
			 * A collection of nested styles.
			 * @type {Adobe.Indesign.NestedStyles}
			 * @readonly
			 */
			public readonly nestedStyles: Adobe.Indesign.NestedStyles;
			/**
			 * If true, keeps the text on the same line.
			 * @type {boolean}
			 */
			public noBreak: boolean;
			/**
			 * A collection of notes.
			 * @type {Adobe.Indesign.Notes}
			 * @readonly
			 */
			public readonly notes: Adobe.Indesign.Notes;
			/**
			 * The alignment of the number.
			 * @type {Adobe.Indesign.ListAlignment}
			 */
			public numberingAlignment: Adobe.Indesign.ListAlignment;
			/**
			 * If true, apply the numbering restart policy.
			 * @type {boolean}
			 */
			public numberingApplyRestartPolicy: boolean;
			/**
			 * The character style to be used for the number string. Can 
			 * return: CharacterStyle or String.
			 * @type {any}
			 */
			public numberingCharacterStyle: any;
			/**
			 * Continue the numbering at this level.
			 * @type {boolean}
			 */
			public numberingContinue: boolean;
			/**
			 * The number string expression for numbering.
			 * @type {string}
			 */
			public numberingExpression: string;
			/**
			 * Numbering format options. Can return: NumberingStyle 
			 * enumerator or String.
			 * @type {any}
			 */
			public numberingFormat: any;
			/**
			 * The level of the paragraph.
			 * @type {number}
			 */
			public numberingLevel: number;
			/**
			 * Numbering restart policies.
			 * @type {Adobe.Indesign.NumberingRestartPolicy}
			 * @readonly
			 */
			public readonly numberingRestartPolicies: Adobe.Indesign.NumberingRestartPolicy;
			/**
			 * Determines starting number in a numbered list.
			 * @type {number}
			 */
			public numberingStartAt: number;
			/**
			 * OpenType features. Can return: Array of Array of 2 Strings 
			 * or Long Integers.
			 * @type {any}
			 */
			public opentypeFeatures: any;
			/**
			 * If true, uses contextual alternate forms in OpenType fonts.
			 * @type {boolean}
			 */
			public otfContextualAlternate: boolean;
			/**
			 * If true, uses discretionary ligatures in OpenType fonts.
			 * @type {boolean}
			 */
			public otfDiscretionaryLigature: boolean;
			/**
			 * The figure style in OpenType fonts.
			 * @type {Adobe.Indesign.OTFFigureStyle}
			 */
			public otfFigureStyle: Adobe.Indesign.OTFFigureStyle;
			/**
			 * If true, uses fractions in OpenType fonts.
			 * @type {boolean}
			 */
			public otfFraction: boolean;
			/**
			 * If true, use historical forms in OpenType fonts.
			 * @type {boolean}
			 */
			public otfHistorical: boolean;
			/**
			 * If true, switches hiragana fonts, which have different 
			 * glyphs for horizontal and vertical.
			 * @type {boolean}
			 */
			public otfHVKana: boolean;
			/**
			 * If true, use alternate justification forms in OpenType fonts
			 * @type {boolean}
			 */
			public otfJustificationAlternate: boolean;
			/**
			 * If true, uses localized forms in OpenType fonts.
			 * @type {boolean}
			 */
			public otfLocale: boolean;
			/**
			 * If true, uses mark positioning in OpenType fonts.
			 * @type {boolean}
			 */
			public otfMark: boolean;
			/**
			 * If true, uses ordinals in OpenType fonts.
			 * @type {boolean}
			 */
			public otfOrdinal: boolean;
			/**
			 * If true, use overlapping swash forms in OpenType fonts
			 * @type {boolean}
			 */
			public otfOverlapSwash: boolean;
			/**
			 * If true, kerns according to proportional CJK metrics in 
			 * OpenType fonts.
			 * @type {boolean}
			 */
			public otfProportionalMetrics: boolean;
			/**
			 * If true, applies italics to half-width alphanumerics.
			 * @type {boolean}
			 */
			public otfRomanItalics: boolean;
			/**
			 * If true, use a slashed zeroes in OpenType fonts.
			 * @type {boolean}
			 */
			public otfSlashedZero: boolean;
			/**
			 * If true, use stretched alternate forms in OpenType fonts
			 * @type {boolean}
			 */
			public otfStretchedAlternate: boolean;
			/**
			 * If true, use stylistic alternate forms in OpenType fonts
			 * @type {boolean}
			 */
			public otfStylisticAlternate: boolean;
			/**
			 * The stylistic sets to use in OpenType fonts.
			 * @type {number}
			 */
			public otfStylisticSets: number;
			/**
			 * If true, uses swash forms in OpenType fonts.
			 * @type {boolean}
			 */
			public otfSwash: boolean;
			/**
			 * If true, uses titling forms in OpenType fonts.
			 * @type {boolean}
			 */
			public otfTitling: boolean;
			/**
			 * A collection of ellipses.
			 * @type {Adobe.Indesign.Ovals}
			 * @readonly
			 */
			public readonly ovals: Adobe.Indesign.Ovals;
			/**
			 * If true, the fill color of the characters will overprint.
			 * @type {boolean}
			 */
			public overprintFill: boolean;
			/**
			 * If true, the stroke of the characters will overprint.
			 * @type {boolean}
			 */
			public overprintStroke: boolean;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 * @type {Adobe.Indesign.PageItems}
			 * @readonly
			 */
			public readonly pageItems: Adobe.Indesign.PageItems;
			/**
			 * Paragraph direction.
			 * @type {Adobe.Indesign.ParagraphDirectionOptions}
			 */
			public paragraphDirection: Adobe.Indesign.ParagraphDirectionOptions;
			/**
			 * If true, the gyoudori mode applies to the entire paragraph. 
			 * If false, the gyoudori mode applies to each line in the 
			 * paragraph.
			 * @type {boolean}
			 */
			public paragraphGyoudori: boolean;
			/**
			 * Paragraph justification.
			 * @type {Adobe.Indesign.ParagraphJustificationOptions}
			 */
			public paragraphJustification: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Paragraph kashida width. 0 is none, 1 is short, 2 is medium, 
			 * 3 is long
			 * @type {number}
			 */
			public paragraphKashidaWidth: number;
			/**
			 * A collection of paragraphs.
			 * @type {Adobe.Indesign.Paragraphs}
			 * @readonly
			 */
			public readonly paragraphs: Adobe.Indesign.Paragraphs;
			/**
			 * The parent of the Line (a XmlStory, TextPath, TextFrame, 
			 * Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, 
			 * Line, Word, Character, Story, Cell, XMLElement, Footnote, 
			 * Note, Change or HiddenText).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * The story that contains the text.
			 * @type {Adobe.Indesign.Story}
			 * @readonly
			 */
			public readonly parentStory: Adobe.Indesign.Story;
			/**
			 * An array of the text frames that contain the text. Can 
			 * return: Array of TextFrames or TextPaths.
			 * @type {any}
			 * @readonly
			 */
			public readonly parentTextFrames: any;
			/**
			 * The text size.
			 * @type {any}
			 */
			public pointSize: any;
			/**
			 * A collection of polygons.
			 * @type {Adobe.Indesign.Polygons}
			 * @readonly
			 */
			public readonly polygons: Adobe.Indesign.Polygons;
			/**
			 * The text position relative to the baseline.
			 * @type {Adobe.Indesign.Position}
			 */
			public position: Adobe.Indesign.Position;
			/**
			 * The OpenType positional form.
			 * @type {Adobe.Indesign.PositionalForms}
			 */
			public positionalForm: Adobe.Indesign.PositionalForms;
			/**
			 * A collection of preferences objects.
			 * @type {Adobe.Indesign.Preferences}
			 * @readonly
			 */
			public readonly preferences: Adobe.Indesign.Preferences;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * A collection of radio buttons.
			 * @type {Adobe.Indesign.RadioButtons}
			 * @readonly
			 */
			public readonly radioButtons: Adobe.Indesign.RadioButtons;
			/**
			 * A collection of rectangles.
			 * @type {Adobe.Indesign.Rectangles}
			 * @readonly
			 */
			public readonly rectangles: Adobe.Indesign.Rectangles;
			/**
			 * If true, disallows line breaks in numbers. If false, lines 
			 * can break between digits in multi-digit numbers.
			 * @type {boolean}
			 */
			public rensuuji: boolean;
			/**
			 * The width of the right indent.
			 * @type {any}
			 */
			public rightIndent: any;
			/**
			 * If true, rotates Roman characters in vertical text.
			 * @type {boolean}
			 */
			public rotateSingleByteCharacters: boolean;
			/**
			 * The ruby alignment.
			 * @type {Adobe.Indesign.RubyAlignments}
			 */
			public rubyAlignment: Adobe.Indesign.RubyAlignments;
			/**
			 * If true, auto aligns ruby.
			 * @type {boolean}
			 */
			public rubyAutoAlign: boolean;
			/**
			 * If true, automatically scales ruby to the specified percent 
			 * of parent text size. For information on specifying a 
			 * percent, see ruby parent scaling percent.
			 * @type {boolean}
			 */
			public rubyAutoScaling: boolean;
			/**
			 * If true, automatically scales glyphs in auto tcy 
			 * (tate-chuu-yoko) in ruby to fit one em.
			 * @type {boolean}
			 */
			public rubyAutoTcyAutoScale: boolean;
			/**
			 * The number of digits included in auto tcy (tate-chuu-yoko) 
			 * in ruby.
			 * @type {number}
			 */
			public rubyAutoTcyDigits: number;
			/**
			 * If true, includes Roman characters in auto tcy 
			 * (tate-chuu-yoko) in ruby.
			 * @type {boolean}
			 */
			public rubyAutoTcyIncludeRoman: boolean;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of ruby characters. Can return: Swatch or String.
			 * @type {any}
			 */
			public rubyFill: any;
			/**
			 * If true, ruby is on.
			 * @type {boolean}
			 */
			public rubyFlag: boolean;
			/**
			 * The font applied to ruby characters. Can return: Font or 
			 * String.
			 * @type {any}
			 */
			public rubyFont: any;
			/**
			 * The size (in points) of ruby characters.
			 * @type {number}
			 */
			public rubyFontSize: number;
			/**
			 * The font style of ruby characters. Can return: String or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public rubyFontStyle: any;
			/**
			 * If true, uses OpenType Pro fonts for ruby.
			 * @type {boolean}
			 */
			public rubyOpenTypePro: boolean;
			/**
			 * If true, constrains ruby overhang to the specified amount. 
			 * For information on specifying an amount, see ruby parent 
			 * overhang amount.
			 * @type {boolean}
			 */
			public rubyOverhang: boolean;
			/**
			 * The method of overprinting the ruby fill.
			 * @type {Adobe.Indesign.AdornmentOverprint}
			 */
			public rubyOverprintFill: Adobe.Indesign.AdornmentOverprint;
			/**
			 * The method of overprinting the ruby stroke.
			 * @type {Adobe.Indesign.AdornmentOverprint}
			 */
			public rubyOverprintStroke: Adobe.Indesign.AdornmentOverprint;
			/**
			 * The amount by which ruby characters can overhang the parent 
			 * text.
			 * @type {Adobe.Indesign.RubyOverhang}
			 */
			public rubyParentOverhangAmount: Adobe.Indesign.RubyOverhang;
			/**
			 * The amount (as a percentage) to scale the parent text size 
			 * to determine the ruby text size.
			 * @type {number}
			 */
			public rubyParentScalingPercent: number;
			/**
			 * The ruby spacing relative to the parent text.
			 * @type {Adobe.Indesign.RubyParentSpacing}
			 */
			public rubyParentSpacing: Adobe.Indesign.RubyParentSpacing;
			/**
			 * The position of ruby characters relative to the parent text.
			 * @type {Adobe.Indesign.RubyKentenPosition}
			 */
			public rubyPosition: Adobe.Indesign.RubyKentenPosition;
			/**
			 * The ruby string contents.
			 * @type {string}
			 */
			public rubyString: string;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of ruby characters. Can return: Swatch or String.
			 * @type {any}
			 */
			public rubyStroke: any;
			/**
			 * The stroke tint (as a percentage) of ruby characters.
			 * @type {number}
			 */
			public rubyStrokeTint: number;
			/**
			 * The tint (as a percentage) of the ruby fill color. (Range: 0 
			 * to 100)
			 * @type {number}
			 */
			public rubyTint: number;
			/**
			 * The ruby type.
			 * @type {Adobe.Indesign.RubyTypes}
			 */
			public rubyType: Adobe.Indesign.RubyTypes;
			/**
			 * The stroke weight (in points) of ruby characters.
			 * @type {number}
			 */
			public rubyWeight: number;
			/**
			 * The amount of horizontal space between ruby and parent 
			 * characters.
			 * @type {number}
			 */
			public rubyXOffset: number;
			/**
			 * The horizontal size of ruby characters, specified as a 
			 * percent of the original size.
			 * @type {number}
			 */
			public rubyXScale: number;
			/**
			 * The amount of vertical space between ruby and parent 
			 * characters.
			 * @type {number}
			 */
			public rubyYOffset: number;
			/**
			 * The vertical size of ruby characters, specified as a percent 
			 * of the original size.
			 * @type {number}
			 */
			public rubyYScale: number;
			/**
			 * If true, places a rule above the paragraph.
			 * @type {boolean}
			 */
			public ruleAbove: boolean;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the paragraph rule above. Can return: Swatch or String.
			 * @type {any}
			 */
			public ruleAboveColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke gap of the paragraph rule above. Note: Valid only 
			 * when the paragraph rule above type is not solid. Can return: 
			 * Swatch or String.
			 * @type {any}
			 */
			public ruleAboveGapColor: any;
			/**
			 * If true, the stroke gap of the paragraph rule above will 
			 * overprint. Note: Valid only the rule above type is not 
			 * solid.
			 * @type {boolean}
			 */
			public ruleAboveGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the stroke gap color of the 
			 * paragraph rule. (Range: 0 to 100) Note: Valid only when the 
			 * rule above type is not solid.
			 * @type {number}
			 */
			public ruleAboveGapTint: number;
			/**
			 * The distance to indent the left edge of the paragraph rule 
			 * above (based on either the text width or the column width of 
			 * the first line in the paragraph.
			 * @type {any}
			 */
			public ruleAboveLeftIndent: any;
			/**
			 * The line weight of the rule above.
			 * @type {any}
			 */
			public ruleAboveLineWeight: any;
			/**
			 * The amount to offset the paragraph rule above from the 
			 * baseline of the first line the paragraph.
			 * @type {any}
			 */
			public ruleAboveOffset: any;
			/**
			 * If true, the paragraph rule above will overprint.
			 * @type {boolean}
			 */
			public ruleAboveOverprint: boolean;
			/**
			 * The distance to indent the right edge of the paragraph rule 
			 * above (based on either the text width or the column width of 
			 * the first line in the paragraph.
			 * @type {any}
			 */
			public ruleAboveRightIndent: any;
			/**
			 * The tint (as a percentage) of the paragraph rule above. 
			 * (Range: 0 to 100)
			 * @type {number}
			 */
			public ruleAboveTint: number;
			/**
			 * The stroke type of the rule above the paragraph. Can return: 
			 * StrokeStyle or String.
			 * @type {any}
			 */
			public ruleAboveType: any;
			/**
			 * The basis (text width or column width) used to calculate the 
			 * width of the paragraph rule above.
			 * @type {Adobe.Indesign.RuleWidth}
			 */
			public ruleAboveWidth: Adobe.Indesign.RuleWidth;
			/**
			 * If true, applies a paragraph rule below.
			 * @type {boolean}
			 */
			public ruleBelow: boolean;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the paragraph rule below. Can return: Swatch or String.
			 * @type {any}
			 */
			public ruleBelowColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke gap of the paragraph rule below. Note: Valid only 
			 * when the paragraph rule below type is not solid. Can return: 
			 * Swatch or String.
			 * @type {any}
			 */
			public ruleBelowGapColor: any;
			/**
			 * If true, the gap color of the rule below will overprint.
			 * @type {boolean}
			 */
			public ruleBelowGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the stroke gap color of the 
			 * paragraph rule below. (Range: 0 to 100) Note: Valid only 
			 * when the paragraph rule below type is not solid.
			 * @type {number}
			 */
			public ruleBelowGapTint: number;
			/**
			 * The distance to indent the left edge of the paragraph rule 
			 * below (based on either the text width or the column width of 
			 * the last line in the paragraph.
			 * @type {any}
			 */
			public ruleBelowLeftIndent: any;
			/**
			 * The line weight of the rule below.
			 * @type {any}
			 */
			public ruleBelowLineWeight: any;
			/**
			 * The amount to offset the the paragraph rule below from the 
			 * baseline of the last line of the paragraph.
			 * @type {any}
			 */
			public ruleBelowOffset: any;
			/**
			 * If true, the rule below will overprint.
			 * @type {boolean}
			 */
			public ruleBelowOverprint: boolean;
			/**
			 * The distance to indent the right edge of the paragraph rule 
			 * below (based on either the text width or the column width of 
			 * the last line in the paragraph.
			 * @type {any}
			 */
			public ruleBelowRightIndent: any;
			/**
			 * The tint (as a percentage) of the paragraph rule below. 
			 * (Range: 0 to 100)
			 * @type {number}
			 */
			public ruleBelowTint: number;
			/**
			 * The stroke type of the rule below the paragraph. Can return: 
			 * StrokeStyle or String.
			 * @type {any}
			 */
			public ruleBelowType: any;
			/**
			 * The basis (text width or column width) used to calculate the 
			 * width of the paragraph rule below.
			 * @type {Adobe.Indesign.RuleWidth}
			 */
			public ruleBelowWidth: Adobe.Indesign.RuleWidth;
			/**
			 * If true, the line changes size when characters are scaled.
			 * @type {boolean}
			 */
			public scaleAffectsLineHeight: boolean;
			/**
			 * If true, applies shatai rotation.
			 * @type {boolean}
			 */
			public shataiAdjustRotation: boolean;
			/**
			 * If true, adjusts shatai tsume.
			 * @type {boolean}
			 */
			public shataiAdjustTsume: boolean;
			/**
			 * The shatai lens angle (in degrees).
			 * @type {number}
			 */
			public shataiDegreeAngle: number;
			/**
			 * The amount (as a percentage) of shatai obliquing to apply.
			 * @type {number}
			 */
			public shataiMagnification: number;
			/**
			 * A collection of signature fields.
			 * @type {Adobe.Indesign.SignatureFields}
			 * @readonly
			 */
			public readonly signatureFields: Adobe.Indesign.SignatureFields;
			/**
			 * The alignment to use for lines that contain a single word.
			 * @type {Adobe.Indesign.SingleWordJustification}
			 */
			public singleWordJustification: Adobe.Indesign.SingleWordJustification;
			/**
			 * The skew angle of the Line.
			 * @type {number}
			 */
			public skew: number;
			/**
			 * The height of the paragraph space below.
			 * @type {any}
			 */
			public spaceAfter: any;
			/**
			 * The height of the paragraph space above.
			 * @type {any}
			 */
			public spaceBefore: any;
			/**
			 * The minimum space after a span or a split column
			 * @type {any}
			 */
			public spanColumnMinSpaceAfter: any;
			/**
			 * The minimum space before a span or a split column
			 * @type {any}
			 */
			public spanColumnMinSpaceBefore: any;
			/**
			 * Whether a paragraph should be a single column, span columns 
			 * or split columns
			 * @type {Adobe.Indesign.SpanColumnTypeOptions}
			 */
			public spanColumnType: Adobe.Indesign.SpanColumnTypeOptions;
			/**
			 * The number of columns a paragraph spans or the number of 
			 * split columns. Can return: Short Integer (1 - 40) or 
			 * SpanColumnCountOptions enumerator.
			 * @type {any}
			 */
			public spanSplitColumnCount: any;
			/**
			 * The spline items collection.
			 * @type {Adobe.Indesign.SplineItems}
			 * @readonly
			 */
			public readonly splineItems: Adobe.Indesign.SplineItems;
			/**
			 * The inside gutter if the paragraph splits columns
			 * @type {any}
			 */
			public splitColumnInsideGutter: any;
			/**
			 * The outside gutter if the paragraph splits columns
			 * @type {any}
			 */
			public splitColumnOutsideGutter: any;
			/**
			 * The location at which to start the paragraph.
			 * @type {Adobe.Indesign.StartParagraph}
			 */
			public startParagraph: Adobe.Indesign.StartParagraph;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the strikethrough stroke. Can return: Swatch or String.
			 * @type {any}
			 */
			public strikeThroughColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the strikethrough stroke. Can return: Swatch or 
			 * String.
			 * @type {any}
			 */
			public strikeThroughGapColor: any;
			/**
			 * If true, the gap color of the strikethrough stroke will 
			 * overprint. Note: Valid when strike through type is not 
			 * solid.
			 * @type {boolean}
			 */
			public strikeThroughGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the strikethrough stroke gap 
			 * color. (Range: 0 to 100) Note: Valid when strike through 
			 * type is not solid.
			 * @type {number}
			 */
			public strikeThroughGapTint: number;
			/**
			 * The amount by which to offset the strikethrough stroke from 
			 * the text baseline.
			 * @type {any}
			 */
			public strikeThroughOffset: any;
			/**
			 * If true, the strikethrough stroke will overprint.
			 * @type {boolean}
			 */
			public strikeThroughOverprint: boolean;
			/**
			 * The tint (as a percentage) of the strikethrough stroke. 
			 * (Range: 0 to 100)
			 * @type {number}
			 */
			public strikeThroughTint: number;
			/**
			 * The stroke type of the strikethrough stroke. Can return: 
			 * StrokeStyle or String.
			 * @type {any}
			 */
			public strikeThroughType: any;
			/**
			 * The stroke weight of the strikethrough stroke.
			 * @type {any}
			 */
			public strikeThroughWeight: any;
			/**
			 * If true, draws a strikethrough line through the text.
			 * @type {boolean}
			 */
			public strikeThru: boolean;
			/**
			 * The stroke alignment applied to the text.
			 * @type {Adobe.Indesign.TextStrokeAlign}
			 */
			public strokeAlignment: Adobe.Indesign.TextStrokeAlign;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of the Line. Can also accept: String.
			 * @type {Adobe.Indesign.Swatch}
			 */
			public strokeColor: Adobe.Indesign.Swatch;
			/**
			 * The tint (as a percentage) of the stroke color of the Line. 
			 * (To specify a tint percentage, use a number in the range of 
			 * 0 to 100; to use the inherited or overridden value, use -1.)
			 * @type {number}
			 */
			public strokeTint: number;
			/**
			 * The stroke weight applied to the characters of the text.
			 * @type {any}
			 */
			public strokeWeight: any;
			/**
			 * If true, the applied style has been overridden with 
			 * additional attributes.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly styleOverridden: boolean;
			/**
			 * A collection of tables.
			 * @type {Adobe.Indesign.Tables}
			 * @readonly
			 */
			public readonly tables: Adobe.Indesign.Tables;
			/**
			 * A list of the tab stops in the paragraph. Can return: Array 
			 * of Arrays of Property Name/Value Pairs.
			 * @type {any}
			 */
			public tabList: any;
			/**
			 * A collection of tab stops.
			 * @type {Adobe.Indesign.TabStops}
			 * @readonly
			 */
			public readonly tabStops: Adobe.Indesign.TabStops;
			/**
			 * If true, makes the character horizontal in vertical text.
			 * @type {boolean}
			 */
			public tatechuyoko: boolean;
			/**
			 * The horizontal offset for horizontal characters in vertical 
			 * text.
			 * @type {number}
			 */
			public tatechuyokoXOffset: number;
			/**
			 * The vertical offset for horizontal characters in vertical 
			 * text.
			 * @type {number}
			 */
			public tatechuyokoYOffset: number;
			/**
			 * A collection of text boxes.
			 * @type {Adobe.Indesign.TextBoxes}
			 * @readonly
			 */
			public readonly textBoxes: Adobe.Indesign.TextBoxes;
			/**
			 * A collection of text columns.
			 * @type {Adobe.Indesign.TextColumns}
			 * @readonly
			 */
			public readonly textColumns: Adobe.Indesign.TextColumns;
			/**
			 * A collection of text frames.
			 * @type {Adobe.Indesign.TextFrames}
			 * @readonly
			 */
			public readonly textFrames: Adobe.Indesign.TextFrames;
			/**
			 * A collection of text objects.
			 * @type {Adobe.Indesign.Texts}
			 * @readonly
			 */
			public readonly texts: Adobe.Indesign.Texts;
			/**
			 * A collection of text style ranges.
			 * @type {Adobe.Indesign.TextStyleRanges}
			 * @readonly
			 */
			public readonly textStyleRanges: Adobe.Indesign.TextStyleRanges;
			/**
			 * A collection of text variable instances.
			 * @type {Adobe.Indesign.TextVariableInstances}
			 * @readonly
			 */
			public readonly textVariableInstances: Adobe.Indesign.TextVariableInstances;
			/**
			 * The amount by which to loosen or tighten a block of text, 
			 * specified in thousands of an em.
			 * @type {number}
			 */
			public tracking: number;
			/**
			 * The amount of space after each character.
			 * @type {number}
			 */
			public trailingAki: number;
			/**
			 * If true, ideographic spaces will not wrap to the next line 
			 * like text characters.
			 * @type {boolean}
			 */
			public treatIdeographicSpaceAsSpace: boolean;
			/**
			 * The amount of horizontal character compression.
			 * @type {number}
			 */
			public tsume: number;
			/**
			 * If true, underlines the text.
			 * @type {boolean}
			 */
			public underline: boolean;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the underline stroke. . Can return: Swatch or String.
			 * @type {any}
			 */
			public underlineColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the underline stroke. Note: Valid when underline 
			 * type is not solid. Can return: Swatch or String.
			 * @type {any}
			 */
			public underlineGapColor: any;
			/**
			 * If true, the gap color of the underline stroke will 
			 * overprint.
			 * @type {boolean}
			 */
			public underlineGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of the underline 
			 * stroke. (Range: 0 to 100) Note: Valid when underline type is 
			 * not solid.
			 * @type {number}
			 */
			public underlineGapTint: number;
			/**
			 * The amount by which to offset the underline from the text 
			 * baseline.
			 * @type {any}
			 */
			public underlineOffset: any;
			/**
			 * If true, the underline stroke color will overprint.
			 * @type {boolean}
			 */
			public underlineOverprint: boolean;
			/**
			 * The underline stroke tint (as a percentage). (Range: 0 to 
			 * 100)
			 * @type {number}
			 */
			public underlineTint: number;
			/**
			 * The stroke type of the underline stroke. Can return: 
			 * StrokeStyle or String.
			 * @type {any}
			 */
			public underlineType: any;
			/**
			 * The stroke weight of the underline stroke.
			 * @type {any}
			 */
			public underlineWeight: any;
			/**
			 * The vertical scaling applied to the Line.
			 * @type {number}
			 */
			public verticalScale: number;
			/**
			 * If true, turns on warichu.
			 * @type {boolean}
			 */
			public warichu: boolean;
			/**
			 * The warichu alignment.
			 * @type {Adobe.Indesign.WarichuAlignment}
			 */
			public warichuAlignment: Adobe.Indesign.WarichuAlignment;
			/**
			 * The minimum number of characters allowed after a line break.
			 * @type {number}
			 */
			public warichuCharsAfterBreak: number;
			/**
			 * The minimum number of characters allowed before a line 
			 * break.
			 * @type {number}
			 */
			public warichuCharsBeforeBreak: number;
			/**
			 * The number of lines of warichu within a single normal line.
			 * @type {number}
			 */
			public warichuLines: number;
			/**
			 * The gap between lines of warichu characters.
			 * @type {number}
			 */
			public warichuLineSpacing: number;
			/**
			 * The amount (as a percentage) to scale parent text size to 
			 * determine warichu size.
			 * @type {number}
			 */
			public warichuSize: number;
			/**
			 * A collection of words.
			 * @type {Adobe.Indesign.Words}
			 * @readonly
			 */
			public readonly words: Adobe.Indesign.Words;
			/**
			 * The x (horizontal) offset for diacritic adjustment.
			 * @type {number}
			 */
			public xOffsetDiacritic: number;
			/**
			 * The y (vertical) offset for diacritic adjustment.
			 * @type {number}
			 */
			public yOffsetDiacritic: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerLine(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Apply a character style.
			 * @param {CharacterStyle} usingParam The character style to 
			 * apply.
			 * @returns {void}
			 */
			public applyCharacterStyle(usingParam: CharacterStyle): void;
			/**
			 * Apply one or more conditions.
			 * @param {any[]} usingParam The condition(s) to apply
			 * @param {boolean} removeExistingParam If true, remove 
			 * existing conditions. (Optional)
			 * @returns {void}
			 */
			public applyConditions(usingParam: any[], removeExistingParam: boolean): void;
			/**
			 * Apply a paragraph style.
			 * @param {ParagraphStyle} usingParam The paragraph style to 
			 * apply.
			 * @param {boolean} clearingOverridesParam If true, clear any 
			 * text attributes before applying the style. (Optional)
			 * @returns {void}
			 */
			public applyParagraphStyle(usingParam: ParagraphStyle, clearingOverridesParam: boolean): void;
			/**
			 * asynchronously exports the object(s) to a file.
			 * @param {any} formatParam The export format, specified as an 
			 * enumeration value or as an extension that appears in the 
			 * Save as type or Format menu in the Export dialog. Can 
			 * accept: ExportFormat enumerator or String.
			 * @param {File} toParam The path to the export file.
			 * @param {boolean} showingOptionsParam If true, displays the 
			 * export options dialog. (Optional)
			 * @param {PDFExportPreset} usingParam The export style. 
			 * (Optional)
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 * @returns {Adobe.Indesign.BackgroundTask}
			 */
			public asynchronousExportFile(formatParam: any, toParam: File, showingOptionsParam: boolean, usingParam: PDFExportPreset, versionCommentsParam: string, forceSaveParam: boolean): Adobe.Indesign.BackgroundTask;
			/**
			 * Tag the object or the parent story using default tags 
			 * defined in XML preference.
			 * @returns {void}
			 */
			public autoTag(): void;
			/**
			 * Sets the case of the text.
			 * @param {ChangecaseMode} usingParam The text case option.
			 * @returns {void}
			 */
			public changecase(usingParam: ChangecaseMode): void;
			/**
			 * Finds glyphs that match the find what value and replaces the 
			 * glyphs with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeGlyph(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value and replaces the 
			 * text with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeGrep(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value and replaces the 
			 * text with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeText(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find character type value and 
			 * replaces the text with the change character type value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeTransliterate(reverseOrderParam: boolean): any;
			/**
			 * Clears the specified types of override.
			 * @param {OverrideType} overridesToClearParam The types of 
			 * override to clear. (Optional)
			 * @returns {void}
			 */
			public clearOverrides(overridesToClearParam: OverrideType): void;
			/**
			 * Convert bullets and numbering to text.
			 * @returns {void}
			 */
			public convertBulletsAndNumberingToText(): void;
			/**
			 * Converts the text to a note.
			 * @returns {Adobe.Indesign.Note}
			 */
			public convertToNote(): Adobe.Indesign.Note;
			/**
			 * Converts the text to a table.
			 * @param {string} columnSeparatorParam The character that 
			 * starts a new column in the new table. (Optional)
			 * @param {string} rowSeparatorParam The character starts a new 
			 * row in the new table. (Optional)
			 * @param {number} numberOfColumnsParam The number of columns 
			 * in the table. Note: Valid only when the column and row 
			 * separator characters are the same. (Optional)
			 * @returns {Adobe.Indesign.Table}
			 */
			public convertToTable(columnSeparatorParam: string, rowSeparatorParam: string, numberOfColumnsParam: number): Adobe.Indesign.Table;
			/**
			 * Converts text to outlines. Each line of text becomes a 
			 * polygon object. When the converted text is a single letter 
			 * that has no internal spaces or detached parts, the polygon 
			 * contains only a single path. Note: To determine whether a 
			 * font allows the creation of outlines, see allow outlines.
			 * @param {boolean} deleteOriginalParam If true, deletes the 
			 * original text. If false, creates the outlines as separate 
			 * object(s) on top of the text.  (Optional)
			 * @returns {any}
			 */
			public createOutlines(deleteOriginalParam: boolean): any;
			/**
			 * Duplicates the text in the specified location.
			 * @param {LocationOptions} toParam The location relative to 
			 * the reference object or within the containing object.
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the to parameter specifies before or after. 
			 * Can accept: Text, Story, Cell, Row, Column, Table or 
			 * PageItem. (Optional)
			 * @returns {Adobe.Indesign.Text}
			 */
			public duplicate(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.Text;
			/**
			 * Exports the object(s) to a file.
			 * @param {any} formatParam The export format, specified as an 
			 * enumeration value or as an extension that appears in the 
			 * Save as type or Format menu in the Export dialog. Can 
			 * accept: ExportFormat enumerator or String.
			 * @param {File} toParam The path to the export file.
			 * @param {boolean} showingOptionsParam If true, displays the 
			 * export options dialog. (Optional)
			 * @param {PDFExportPreset} usingParam The export style. 
			 * (Optional)
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 * @returns {void}
			 */
			public exportFile(formatParam: any, toParam: File, showingOptionsParam: boolean, usingParam: PDFExportPreset, versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Finds glyphs that match the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public findGlyph(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public findGrep(reverseOrderParam: boolean): any;
			/**
			 * Finds hyperlink sources that intersecting with specified 
			 * text range.
			 * @param {RangeSortOrder} sortOrderParam The sort order of 
			 * found ranges. (Optional)
			 * @returns {any}
			 */
			public findHyperlinks(sortOrderParam: RangeSortOrder): any;
			/**
			 * Finds text that matches the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public findText(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find character type value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public findTransliterate(reverseOrderParam: boolean): any;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Associates the page item with the specified XML element 
			 * while preserving existing content.
			 * @param {XMLElement} usingParam The XML element.
			 * @returns {void}
			 */
			public markup(usingParam: XMLElement): void;
			/**
			 * Moves the text to the specified location.
			 * @param {LocationOptions} toParam The location relative to 
			 * the reference object or within the containing object.
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the to parameter specifies before or after. 
			 * Can accept: Text, Story, Cell, Row, Column, Table or 
			 * PageItem. (Optional)
			 * @returns {Adobe.Indesign.Text}
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.Text;
			/**
			 * Places the file.
			 * @param {File} fileNameParam The file to place
			 * @param {boolean} showingOptionsParam Whether to display the 
			 * import options dialog (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the placed object(s) (Optional)
			 * @returns {any}
			 */
			public place(fileNameParam: File, showingOptionsParam: boolean, withPropertiesParam: any): any;
			/**
			 * Recomposes the text in the Line.
			 * @returns {void}
			 */
			public recompose(): void;
			/**
			 * Deletes the Line.
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerLine(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Selects the object.
			 * @param {SelectionOptions} existingSelectionParam The 
			 * selection status of the Line in relation to previously 
			 * selected objects. (Optional)
			 * @returns {void}
			 */
			public select(existingSelectionParam: SelectionOptions): void;
			/**
			 * Jump to the text range.
			 * @returns {void}
			 */
			public showText(): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}