/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class StrokeFillProxySetting extends Adobe.Incopy.Preference {
			/** Which part of the stroke/fill proxy is currently active. */
			public active: Adobe.Incopy.StrokeFillProxyOptions;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of the StrokeFillProxySetting. . Can also accept: 
			 * String.
			 */
			public fillColor: Adobe.Incopy.Swatch;
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
			public strokeColor: Adobe.Incopy.Swatch;
			/**
			 * Which target is affected by changes to the stroke/fill 
			 * proxy.
			 */
			public target: Adobe.Incopy.StrokeFillTargetOptions;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerStrokeFillProxySetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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