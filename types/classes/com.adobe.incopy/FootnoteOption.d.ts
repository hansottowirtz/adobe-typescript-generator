/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class FootnoteOption extends Adobe.Incopy.Preference {
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the rule above continued footnote text. Note: Valid when 
			 * continuing rule on is true. Can return: Swatch or String.
			 */
			public continuingRuleColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke gap of the rule above continued footnote text. 
			 * Note: Valid when continuing rule type is not solid. Can 
			 * return: Swatch or String.
			 */
			public continuingRuleGapColor: any;
			/**
			 * If true, overprints the gap color of the rule above 
			 * continued footnote text. Note: Valid when continuing rule 
			 * type is not solid.
			 */
			public continuingRuleGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of the rule 
			 * above continued footnote text. (Range: 0 to 100) Note: Valid 
			 * when continuing rule type is not solid.
			 */
			public continuingRuleGapTint: number;
			/**
			 * The amount to left indent the rule above continued footnote 
			 * text. Note: Valid when continuing rule on is true.
			 */
			public continuingRuleLeftIndent: any;
			/**
			 * The stroke weight of the rule above continued footnote text. 
			 * (Range: 0 to 1000) Note: Valid when continuing rule on is 
			 * true.
			 */
			public continuingRuleLineWeight: any;
			/**
			 * The vertical offset of the rule above continued footnote 
			 * text. Note: Valid when continuing rule on is true.
			 */
			public continuingRuleOffset: any;
			/**
			 * If true, draws a rule above footnote text that continues 
			 * from a previous column. Note: Valid when no splitting is 
			 * false or undefined.
			 */
			public continuingRuleOn: boolean;
			/**
			 * If true, overprints the rule above continued footnote text. 
			 * Note: Valid when continuing rule on is true.
			 */
			public continuingRuleOverprint: boolean;
			/**
			 * The tint (as a percentage) of the rule above continued 
			 * footnote text. (Range: 0 to 100) Note: Valid when continuing 
			 * rule type is not solid.
			 */
			public continuingRuleTint: number;
			/**
			 * The stroke type of the rule above continued footnote text. 
			 * Note: Valid when continuing rule on is true. Can return: 
			 * StrokeStyle or String.
			 */
			public continuingRuleType: any;
			/**
			 * The length of the rule above continued footnote text. Note: 
			 * Valid when continuing rule on is true.
			 */
			public continuingRuleWidth: any;
			/**
			 * If true, footnotes at the end of the story are placed just 
			 * below the text. If false, footnotes at the end of the story 
			 * are placed at the bottom of the column.
			 */
			public eosPlacement: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * The distance between the top of the footnote container and 
			 * the footnote text.
			 */
			public footnoteFirstBaselineOffset: Adobe.Incopy.FootnoteFirstBaseline;
			/**
			 * The character style to apply to footnote reference numbers 
			 * in the main text.
			 */
			public footnoteMarkerStyle: Adobe.Incopy.CharacterStyle;
			/**
			 * The minimum distance between the baseline of the text and 
			 * the top of the footnote container.
			 */
			public footnoteMinimumFirstBaselineOffset: any;
			/**
			 * The footnote numbering style. Can return: 
			 * FootnoteNumberingStyle enumerator or String.
			 */
			public footnoteNumberingStyle: any;
			/**
			 * The paragraph style to apply to footnotes. Note: The space 
			 * before and after the paragraph defined in the paragraph 
			 * style is ignored for footnotes. To define space above and 
			 * between footnotes, see spacer and space between.
			 */
			public footnoteTextStyle: Adobe.Incopy.ParagraphStyle;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The position of footnote reference numbers in the main text. 
			 * Can return: FootnoteMarkerPositioning enumerator or String.
			 */
			public markerPositioning: any;
			/**
			 * If true, footnotes cannot split across columns. If false, 
			 * footnotes flow into succeeding columns when the footnote 
			 * text causes the footnote area to expand upward to reach the 
			 * footnote reference number in the main text.
			 */
			public noSplitting: boolean;
			/**
			 * The parent of the FootnoteOption (a Application or 
			 * Document).
			 */
			public readonly parent: any;
			/**
			 * The prefix text of the footnote. (Limit: 0 to 100 
			 * characters)
			 */
			public prefix: string;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The point at which to restart footnote numbering. Can 
			 * return: FootnoteRestarting enumerator or String.
			 */
			public restartNumbering: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of the rule above the first footnote in the 
			 * column. Note: Valid when rule on is true. Can return: Swatch 
			 * or String.
			 */
			public ruleColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke gap of the rule above the first footnote in the 
			 * column. Note: Valid when rule type is not solid. Can return: 
			 * Swatch or String.
			 */
			public ruleGapColor: any;
			/**
			 * If true, overprints the gap color of the rule above the 
			 * first footnote in the column. Note: Valid when rule type is 
			 * not solid.
			 */
			public ruleGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of the rule 
			 * above the first footnote in the column. (Range: 0 to 100) 
			 * Note: Valid when rule type is not solid.
			 */
			public ruleGapTint: number;
			/**
			 * The amount to left indent the rule above the first footnote 
			 * in the column. Note: Valid when rule on is true.
			 */
			public ruleLeftIndent: any;
			/**
			 * The stroke weight of the rule above the first footnote in 
			 * the column. (Range: 0 to 1000) Note: Valid when rule on is 
			 * true.
			 */
			public ruleLineWeight: any;
			/**
			 * The vertical offset of the rule above the first footnote in 
			 * the column. Note: Valid when rule on is true.
			 */
			public ruleOffset: any;
			/**
			 * If true, draws a rule between the text and the first 
			 * footnote in the column.
			 */
			public ruleOn: boolean;
			/**
			 * If true, overprints the rule above the first footnote in the 
			 * column. Note: Valid when rule on is true.
			 */
			public ruleOverprint: boolean;
			/**
			 * The tint (as a percentage) of the rule above the first 
			 * footnote in the column. (Range: 0 to 100) Note: Valid when 
			 * rule on is true.
			 */
			public ruleTint: number;
			/**
			 * The stroke type of the rule above the first footnote in a 
			 * column. Note: Valid when rule on is true. Can return: 
			 * StrokeStyle or String.
			 */
			public ruleType: any;
			/**
			 * The length of the rule above the first footnote in the 
			 * column. Note: Valid when rule on is true.
			 */
			public ruleWidth: any;
			/**
			 * The text to insert between the footnote marker number and 
			 * the footnote text. (Range: 0 to 100 characters)
			 */
			public separatorText: string;
			/**
			 * The position of the footnote prefix and/or suffix. Can 
			 * return: FootnotePrefixSuffix enumerator or String.
			 */
			public showPrefixSuffix: any;
			/**
			 * The amount of vertical space between footnotes. Note: The 
			 * space before and space after defined for the paragraph style 
			 * applied to the footnote is ignored.
			 */
			public spaceBetween: any;
			/**
			 * The minimum amount of vertical space between the bottom of 
			 * the text column and the first footnote. Note: The space 
			 * before amount defined in the paragraph style applied to the 
			 * footnote is ignored for the first footnote.
			 */
			public spacer: any;
			/** The number at which to start footnote numbering. */
			public startAt: number;
			/**
			 * The suffix text of the footnote. (Limit: 0 to 100 
			 * characters)
			 */
			public suffix: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerFootnoteOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerFootnoteOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}