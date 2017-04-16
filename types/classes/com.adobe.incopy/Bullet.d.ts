/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class Bullet extends Adobe.Incopy.Preference {
			/**
			 * Font of the bullet character. Can return: Font, String or 
			 * AutoEnum enumerator.
			 * @type {any}
			 */
			public bulletsFont: any;
			/**
			 * Font style of the bullet character. Can return: String, 
			 * NothingEnum enumerator or AutoEnum enumerator.
			 * @type {any}
			 */
			public bulletsFontStyle: any;
			/**
			 * The type of bullet character.
			 * @type {Adobe.Incopy.BulletCharacterType}
			 */
			public characterType: Adobe.Incopy.BulletCharacterType;
			/**
			 * The bullet character as a unicode ID or a glyph ID.
			 * @type {number}
			 */
			public characterValue: number;
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
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the Bullet (a TextDefault, ParagraphStyle, 
			 * Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, 
			 * Line, Word, Character, Story, XmlStory, FindTextPreference, 
			 * ChangeTextPreference, FindGrepPreference, 
			 * ChangeGrepPreference, FindTransliteratePreference or 
			 * ChangeTransliteratePreference).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerBullet(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerBullet(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}