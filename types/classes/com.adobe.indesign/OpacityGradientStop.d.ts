/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class OpacityGradientStop extends Adobe.Csawlib.CSHostObject {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The index of the OpacityGradientStop within its containing 
			 * object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The location of the opacity gradient stop, as a percentage 
			 * of the OpacityGradientStop size. (Range: 0 to 100)
			 */
			public location: number;
			/**
			 * The mid-point of the opacity gradient stop, as a percentage 
			 * of the OpacityGradientStop size. (Range: 13 to 87)
			 */
			public midpoint: number;
			/**
			 * The opacity of the opacity gradient stop (as a percentage). 
			 * (Range: 0 to 100)
			 */
			public opacity: number;
			/**
			 * The parent of the OpacityGradientStop (a 
			 * GradientFeatherSetting or FindChangeGradientFeatherSetting).
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
			public addEventListenerOpacityGradientStop(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/** Deletes the OpacityGradientStop. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerOpacityGradientStop(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}