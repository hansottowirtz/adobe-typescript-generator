/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Bullet extends Adobe.Incopy.Preference {
			/**
			 * Font of the bullet character. Can return: Font, String or 
			 * AutoEnum enumerator.
			 */
			public bulletsFont: any;
			/**
			 * Font style of the bullet character. Can return: String, 
			 * NothingEnum enumerator or AutoEnum enumerator.
			 */
			public bulletsFontStyle: any;
			/** The type of bullet character. */
			public characterType: Adobe.Incopy.BulletCharacterType;
			/** The bullet character as a unicode ID or a glyph ID. */
			public characterValue: number;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the Bullet (a TextDefault, ParagraphStyle, 
			 * Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, 
			 * Line, Word, Character, Story, XmlStory, FindTextPreference, 
			 * ChangeTextPreference, FindGrepPreference, 
			 * ChangeGrepPreference, FindTransliteratePreference or 
			 * ChangeTransliteratePreference).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerBullet(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerBullet(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}