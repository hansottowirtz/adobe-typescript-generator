/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** BlendingSetting */
		class FindChangeBlendingSetting extends Adobe.Indesign.BlendingSetting {
			/**
			 * The blending mode for controlling how the base color 
			 * interacts with the color of the FindChangeBlendingSetting. 
			 * Can return: BlendMode enumerator or NothingEnum enumerator.
			 * @type {Adobe.Indesign.BlendMode}
			 */
			public blendMode: Adobe.Indesign.BlendMode;
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
			 * If true, blending is applied only to the group. If false, 
			 * blending includes all objects beneath the group. Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {boolean}
			 */
			public isolateBlending: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * If true, the FindChangeBlendingSetting is a knockout group. 
			 * Can return: Boolean or NothingEnum enumerator.
			 * @type {boolean}
			 */
			public knockoutGroup: boolean;
			/**
			 * The fill opacity of the FindChangeBlendingSetting (as a 
			 * percentage). (Range: 0 to 100). Can return: Real (0 - 100) 
			 * or NothingEnum enumerator.
			 * @type {number}
			 */
			public opacity: number;
			/**
			 * The parent of the FindChangeBlendingSetting (a 
			 * FindChangeTransparencySetting, 
			 * FindChangeStrokeTransparencySetting, 
			 * FindChangeFillTransparencySetting or 
			 * FindChangeContentTransparencySetting).
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
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerFindChangeBlendingSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerFindChangeBlendingSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}