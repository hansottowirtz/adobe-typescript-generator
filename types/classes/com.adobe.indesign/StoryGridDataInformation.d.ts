/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class StoryGridDataInformation extends Adobe.Indesign.Preference {
			/**
			 * The font applied to the StoryGridDataInformation, specified 
			 * as either a font object or the name of font family. Can 
			 * return: Font or String.
			 */
			public appliedFont: any;
			/** The amount of white space between characters. */
			public characterAki: number;
			/**
			 * The alignment of small characters to the largest character 
			 * in the line.
			 */
			public characterAlignment: Adobe.Indesign.CharacterAlignment;
			/**
			 * The character count location. Note: Valid when show 
			 * character count is true.
			 */
			public characterCountLocation: Adobe.Indesign.CharacterCountLocation;
			/** The character size for the character count display. */
			public characterCountSize: number;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The name of the font style. */
			public fontStyle: string;
			/** The alignment to the frame grid or baseline grid. */
			public gridAlignment: Adobe.Indesign.GridAlignment;
			/** The grid view setting. */
			public gridView: Adobe.Indesign.GridViewSettings;
			/**
			 * The horizontal scaling applied to the 
			 * StoryGridDataInformation.
			 */
			public horizontalScale: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The amount of white space between lines. */
			public lineAki: number;
			/** The line justification. */
			public lineAlignment: Adobe.Indesign.LineAlignment;
			/**
			 * The parent of the StoryGridDataInformation (a Application or 
			 * Document).
			 */
			public readonly parent: any;
			/** The text size. */
			public pointSize: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The vertical scaling applied to the 
			 * StoryGridDataInformation.
			 */
			public verticalScale: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerStoryGridDataInformation(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerStoryGridDataInformation(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}