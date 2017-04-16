/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class BlendingSetting extends Adobe.Indesign.Preference {
			/**
			 * The blending mode for controlling how the base color 
			 * interacts with the color of the BlendingSetting.
			 */
			public blendMode: Adobe.Indesign.BlendMode;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * If true, blending is applied only to the group. If false, 
			 * blending includes all objects beneath the group.
			 */
			public isolateBlending: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** If true, the BlendingSetting is a knockout group. */
			public knockoutGroup: boolean;
			/**
			 * The fill opacity of the BlendingSetting (as a percentage). 
			 * (Range: 0 to 100)
			 */
			public opacity: number;
			/**
			 * The parent of the BlendingSetting (a TransparencySetting, 
			 * StrokeTransparencySetting, FillTransparencySetting or 
			 * ContentTransparencySetting).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerBlendingSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerBlendingSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}