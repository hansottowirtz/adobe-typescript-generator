/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ObjectStyleStrokeEffectsCategorySettings extends Adobe.Indesign.Preference {
			/** If true, the object style will apply bevel emboss. */
			public enableBevelEmboss: boolean;
			/**
			 * If true, the object style will apply directional feathering.
			 */
			public enableDirectionalFeather: boolean;
			/** If true, the object style will apply drop shadows. */
			public enableDropShadow: boolean;
			/** If true, the object style will apply feathering. */
			public enableFeather: boolean;
			/** If true, the object style will apply gradient feathering. */
			public enableGradientFeather: boolean;
			/** If true, the object style will apply inner glow. */
			public enableInnerGlow: boolean;
			/** If true, the object style will apply inner shadows. */
			public enableInnerShadow: boolean;
			/** If true, the object style will apply outer glow. */
			public enableOuterGlow: boolean;
			/** If true, the object style will apply satin. */
			public enableSatin: boolean;
			/** If true, the object style will apply transparency settings. */
			public enableTransparency: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the ObjectStyleStrokeEffectsCategorySettings 
			 * (a ObjectStyle).
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
			public addEventListenerObjectStyleStrokeEffectsCategorySettings(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerObjectStyleStrokeEffectsCategorySettings(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}