/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class StrokeFillProxySetting extends Adobe.Indesign.Preference {
			/** Which part of the stroke/fill proxy is currently active. */
			public active: Adobe.Indesign.StrokeFillProxyOptions;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of the StrokeFillProxySetting. . Can also accept: 
			 * String.
			 */
			public fillColor: Adobe.Indesign.Swatch;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The parent of the StrokeFillProxySetting (a Application). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of the StrokeFillProxySetting. Can also accept: 
			 * String.
			 */
			public strokeColor: Adobe.Indesign.Swatch;
			/**
			 * Which target is affected by changes to the stroke/fill 
			 * proxy.
			 */
			public target: Adobe.Indesign.StrokeFillTargetOptions;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerStrokeFillProxySetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerStrokeFillProxySetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}