/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class FindChangeFillTransparencySetting extends Adobe.Indesign.Preference {
			/**
			 * Settings related to the bevel and emboss effect.
			 * @type {Adobe.Indesign.FindChangeBevelAndEmbossSetting}
			 * @readonly
			 */
			public readonly bevelAndEmbossSettings: Adobe.Indesign.FindChangeBevelAndEmbossSetting;
			/**
			 * Blending mode settings.
			 * @type {Adobe.Indesign.FindChangeBlendingSetting}
			 * @readonly
			 */
			public readonly blendingSettings: Adobe.Indesign.FindChangeBlendingSetting;
			/**
			 * Settings related to the directional feather effect.
			 * @type {Adobe.Indesign.FindChangeDirectionalFeatherSetting}
			 * @readonly
			 */
			public readonly directionalFeatherSettings: Adobe.Indesign.FindChangeDirectionalFeatherSetting;
			/**
			 * Settings related to the drop shadow effect.
			 * @type {Adobe.Indesign.FindChangeDropShadowSetting}
			 * @readonly
			 */
			public readonly dropShadowSettings: Adobe.Indesign.FindChangeDropShadowSetting;
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
			 * Settings related to the feather effect.
			 * @type {Adobe.Indesign.FindChangeFeatherSetting}
			 * @readonly
			 */
			public readonly featherSettings: Adobe.Indesign.FindChangeFeatherSetting;
			/**
			 * Settings related to the gradient feather effect.
			 * @type {Adobe.Indesign.FindChangeGradientFeatherSetting}
			 * @readonly
			 */
			public readonly gradientFeatherSettings: Adobe.Indesign.FindChangeGradientFeatherSetting;
			/**
			 * Settings related to the inner glow effect.
			 * @type {Adobe.Indesign.FindChangeInnerGlowSetting}
			 * @readonly
			 */
			public readonly innerGlowSettings: Adobe.Indesign.FindChangeInnerGlowSetting;
			/**
			 * Settings related to the inner shadow effect.
			 * @type {Adobe.Indesign.FindChangeInnerShadowSetting}
			 * @readonly
			 */
			public readonly innerShadowSettings: Adobe.Indesign.FindChangeInnerShadowSetting;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * Settings related to the outer glow effect.
			 * @type {Adobe.Indesign.FindChangeOuterGlowSetting}
			 * @readonly
			 */
			public readonly outerGlowSettings: Adobe.Indesign.FindChangeOuterGlowSetting;
			/**
			 * The parent of the FindChangeFillTransparencySetting (a 
			 * FindObjectPreference or ChangeObjectPreference).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A collection of preferences objects.
			 * @type {Adobe.Indesign.Preferences}
			 * @readonly
			 */
			public readonly preferences: Adobe.Indesign.Preferences;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * Settings related to the satin effect
			 * @type {Adobe.Indesign.FindChangeSatinSetting}
			 * @readonly
			 */
			public readonly satinSettings: Adobe.Indesign.FindChangeSatinSetting;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerFindChangeFillTransparencySetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerFindChangeFillTransparencySetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}