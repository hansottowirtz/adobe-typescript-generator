/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class FindChangeStrokeTransparencySetting extends Adobe.Indesign.Preference {
			/** Settings related to the bevel and emboss effect. */
			public readonly bevelAndEmbossSettings: Adobe.Indesign.FindChangeBevelAndEmbossSetting;
			/** Blending mode settings. */
			public readonly blendingSettings: Adobe.Indesign.FindChangeBlendingSetting;
			/** Settings related to the directional feather effect. */
			public readonly directionalFeatherSettings: Adobe.Indesign.FindChangeDirectionalFeatherSetting;
			/** Settings related to the drop shadow effect. */
			public readonly dropShadowSettings: Adobe.Indesign.FindChangeDropShadowSetting;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** Settings related to the feather effect. */
			public readonly featherSettings: Adobe.Indesign.FindChangeFeatherSetting;
			/** Settings related to the gradient feather effect. */
			public readonly gradientFeatherSettings: Adobe.Indesign.FindChangeGradientFeatherSetting;
			/** Settings related to the inner glow effect. */
			public readonly innerGlowSettings: Adobe.Indesign.FindChangeInnerGlowSetting;
			/** Settings related to the inner shadow effect. */
			public readonly innerShadowSettings: Adobe.Indesign.FindChangeInnerShadowSetting;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** Settings related to the outer glow effect. */
			public readonly outerGlowSettings: Adobe.Indesign.FindChangeOuterGlowSetting;
			/**
			 * The parent of the FindChangeStrokeTransparencySetting (a 
			 * FindObjectPreference or ChangeObjectPreference).
			 */
			public readonly parent: any;
			/** A collection of preferences objects. */
			public readonly preferences: Adobe.Indesign.Preferences;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** Settings related to the satin effect */
			public readonly satinSettings: Adobe.Indesign.FindChangeSatinSetting;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerFindChangeStrokeTransparencySetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerFindChangeStrokeTransparencySetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}