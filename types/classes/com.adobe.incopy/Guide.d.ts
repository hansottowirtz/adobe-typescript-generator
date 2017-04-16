/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Guide extends Adobe.Csawlib.CSHostObject {
			/**
			 * Dispatched after a Guide is placed. This event bubbles. This 
			 * event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_PLACE: string;
			/**
			 * If true, the master page item can be overridden.
			 * @type {boolean}
			 */
			public allowOverrides: boolean;
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
			 * If true, horizontal orientation guides stop at the edges of 
			 * the specified page. If false, the guides extends across the 
			 * width of the spread and into the pasteboard area.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly fitToPage: boolean;
			/**
			 * The color of the guide, specified either as an array of 
			 * three doubles, each in the range 0 to 255 and representing 
			 * R, G, and B values, or as a UI color. Can return: Array of 3 
			 * Reals (0 - 255) or UIColors enumerator.
			 * @type {any}
			 * @readonly
			 */
			public readonly guideColor: any;
			/**
			 * The type of the guide.
			 * @type {Adobe.Incopy.GuideTypeOptions}
			 * @readonly
			 */
			public readonly guideType: Adobe.Incopy.GuideTypeOptions;
			/**
			 * The zone of the guide.
			 * @type {any}
			 * @readonly
			 */
			public readonly guideZone: any;
			/**
			 * The unique ID of the Guide.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the Guide within its containing object.
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
			 * The layer that the Guide is on.
			 * @type {Adobe.Incopy.Layer}
			 * @readonly
			 */
			public readonly itemLayer: Adobe.Incopy.Layer;
			/**
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * The location at which to place the guide relative to the 
			 * current ruler zero point.
			 * @type {any}
			 * @readonly
			 */
			public readonly location: any;
			/**
			 * If true, the Guide is locked.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly locked: boolean;
			/**
			 * The name of the Guide; this is an alias to the Guide's label 
			 * property.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The orientation of the guide.
			 * @type {Adobe.Incopy.HorizontalOrVertical}
			 * @readonly
			 */
			public readonly orientation: Adobe.Incopy.HorizontalOrVertical;
			/**
			 * If true, the object originated on a master spread and was 
			 * overridden. If false, the object either originated on a 
			 * master spread and was not overridden, or the object did not 
			 * originate on a master page.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly overridden: boolean;
			/**
			 * An object that originated on a master page and has been 
			 * overridden. Can return: PageItem, Guide, Graphic, Movie or 
			 * Sound.
			 * @type {any}
			 * @readonly
			 */
			public readonly overriddenMasterPageItem: any;
			/**
			 * The parent of the Guide (a Spread or MasterSpread).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * The page on which this page item appears.
			 * @type {Adobe.Incopy.Page}
			 * @readonly
			 */
			public readonly parentPage: Adobe.Incopy.Page;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The view magnification as a percentage below which guides 
			 * are no longer displayed. (Range: 5.0 to 4000.0)
			 * @type {number}
			 * @readonly
			 */
			public readonly viewThreshold: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerGuide(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerGuide(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}