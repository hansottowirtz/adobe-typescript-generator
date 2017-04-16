/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class StoryGridDataInformation extends Adobe.Indesign.Preference {
			/**
			 * The font applied to the StoryGridDataInformation, specified 
			 * as either a font object or the name of font family. Can 
			 * return: Font or String.
			 * @type {any}
			 */
			public appliedFont: any;
			/**
			 * The amount of white space between characters.
			 * @type {number}
			 */
			public characterAki: number;
			/**
			 * The alignment of small characters to the largest character 
			 * in the line.
			 * @type {Adobe.Indesign.CharacterAlignment}
			 */
			public characterAlignment: Adobe.Indesign.CharacterAlignment;
			/**
			 * The character count location. Note: Valid when show 
			 * character count is true.
			 * @type {Adobe.Indesign.CharacterCountLocation}
			 */
			public characterCountLocation: Adobe.Indesign.CharacterCountLocation;
			/**
			 * The character size for the character count display.
			 * @type {number}
			 */
			public characterCountSize: number;
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
			 * The name of the font style.
			 * @type {string}
			 */
			public fontStyle: string;
			/**
			 * The alignment to the frame grid or baseline grid.
			 * @type {Adobe.Indesign.GridAlignment}
			 */
			public gridAlignment: Adobe.Indesign.GridAlignment;
			/**
			 * The grid view setting.
			 * @type {Adobe.Indesign.GridViewSettings}
			 */
			public gridView: Adobe.Indesign.GridViewSettings;
			/**
			 * The horizontal scaling applied to the 
			 * StoryGridDataInformation.
			 * @type {number}
			 */
			public horizontalScale: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The amount of white space between lines.
			 * @type {number}
			 */
			public lineAki: number;
			/**
			 * The line justification.
			 * @type {Adobe.Indesign.LineAlignment}
			 */
			public lineAlignment: Adobe.Indesign.LineAlignment;
			/**
			 * The parent of the StoryGridDataInformation (a Application or 
			 * Document).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * The text size.
			 * @type {any}
			 */
			public pointSize: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The vertical scaling applied to the 
			 * StoryGridDataInformation.
			 * @type {number}
			 */
			public verticalScale: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerStoryGridDataInformation(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerStoryGridDataInformation(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}