/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TextPath extends Adobe.Csawlib.CSHostObject {
			/**
			 * Dispatched after a TextPath is placed. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_PLACE: string;
			/**
			 * Dispatched before a TextPath is placed. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_PLACE: string;
			/**
			 * The halfway point between the start bracket and the end 
			 * bracket.
			 * @type {number}
			 * @readonly
			 */
			public readonly centerBracket: number;
			/**
			 * A collection of characters.
			 * @type {Adobe.Indesign.Characters}
			 * @readonly
			 */
			public readonly characters: Adobe.Indesign.Characters;
			/**
			 * The contents of the text frame. Can return: String, 
			 * TextFrameContents enumerator or SpecialCharacters 
			 * enumerator.
			 * @type {any}
			 */
			public contents: any;
			/**
			 * The end of the type on a path. Note: Additional text becomes 
			 * overset text unless the text is linked to another path or 
			 * text frame.
			 * @type {number}
			 */
			public endBracket: number;
			/**
			 * The last text frame in the thread. Can return: TextFrame or 
			 * TextPath.
			 * @type {any}
			 * @readonly
			 */
			public readonly endTextFrame: any;
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
			 * The flip effect applied to the type on a path.
			 * @type {Adobe.Indesign.FlipValues}
			 */
			public flipPathEffect: Adobe.Indesign.FlipValues;
			/**
			 * The unique ID of the TextPath.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the TextPath within its containing object.
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
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * A collection of lines.
			 * @type {Adobe.Indesign.Lines}
			 * @readonly
			 */
			public readonly lines: Adobe.Indesign.Lines;
			/**
			 * The name of the TextPath; this is an alias to the TextPath's 
			 * label property.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The next text frame in the thread. Can return: TextFrame or 
			 * TextPath. Can also accept: NothingEnum enumerator.
			 * @type {any}
			 */
			public nextTextFrame: any;
			/**
			 * If true, the story has overset text.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly overflows: boolean;
			/**
			 * A collection of paragraphs.
			 * @type {Adobe.Indesign.Paragraphs}
			 * @readonly
			 */
			public readonly paragraphs: Adobe.Indesign.Paragraphs;
			/**
			 * The parent of the TextPath (a SplineItem, Polygon, 
			 * GraphicLine, Rectangle, Oval, TextFrame or EPSText).
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
			 * The alignment of the type on a path.
			 * @type {Adobe.Indesign.PathTypeAlignments}
			 */
			public pathAlignment: Adobe.Indesign.PathTypeAlignments;
			/**
			 * The effect applied to the type on a path.
			 * @type {Adobe.Indesign.TextPathEffects}
			 */
			public pathEffect: Adobe.Indesign.TextPathEffects;
			/**
			 * The spacing applied to the type on a path.
			 * @type {number}
			 */
			public pathSpacing: number;
			/**
			 * The previous text frame in the thread. Can return: TextFrame 
			 * or TextPath. Can also accept: NothingEnum enumerator.
			 * @type {any}
			 */
			public previousTextFrame: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The location of the start of the type on the path, expressed 
			 * in points. Note: 0 is the first point on the path.
			 * @type {number}
			 */
			public startBracket: number;
			/**
			 * The first text frame in the thread. Can return: TextFrame or 
			 * TextPath.
			 * @type {any}
			 * @readonly
			 */
			public readonly startTextFrame: any;
			/**
			 * The alignment applied to the type on a path.
			 * @type {Adobe.Indesign.TextTypeAlignments}
			 */
			public textAlignment: Adobe.Indesign.TextTypeAlignments;
			/**
			 * A collection of text columns.
			 * @type {Adobe.Indesign.TextColumns}
			 * @readonly
			 */
			public readonly textColumns: Adobe.Indesign.TextColumns;
			/**
			 * The index of the text frame within the story.
			 * @type {number}
			 * @readonly
			 */
			public readonly textFrameIndex: number;
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
			 * A collection of words.
			 * @type {Adobe.Indesign.Words}
			 * @readonly
			 */
			public readonly words: Adobe.Indesign.Words;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerTextPath(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 * @returns {string}
			 */
			public extractLabel(keyParam: string): string;
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
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 * @returns {void}
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Deletes the TextPath.
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
			public removeEventListenerTextPath(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}