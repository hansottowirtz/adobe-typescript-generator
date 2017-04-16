/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class StrokeTransparencySetting extends Adobe.Indesign.Preference {
			/**
			 * Settings related to the bevel and emboss effect.
			 * @type {Adobe.Indesign.BevelAndEmbossSetting}
			 * @readonly
			 */
			public readonly bevelAndEmbossSettings: Adobe.Indesign.BevelAndEmbossSetting;
			/**
			 * Blending mode settings.
			 * @type {Adobe.Indesign.BlendingSetting}
			 * @readonly
			 */
			public readonly blendingSettings: Adobe.Indesign.BlendingSetting;
			/**
			 * Settings related to the directional feather effect.
			 * @type {Adobe.Indesign.DirectionalFeatherSetting}
			 * @readonly
			 */
			public readonly directionalFeatherSettings: Adobe.Indesign.DirectionalFeatherSetting;
			/**
			 * Settings related to the drop shadow effect.
			 * @type {Adobe.Indesign.DropShadowSetting}
			 * @readonly
			 */
			public readonly dropShadowSettings: Adobe.Indesign.DropShadowSetting;
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
			 * @type {Adobe.Indesign.FeatherSetting}
			 * @readonly
			 */
			public readonly featherSettings: Adobe.Indesign.FeatherSetting;
			/**
			 * Settings related to the gradient feather effect.
			 * @type {Adobe.Indesign.GradientFeatherSetting}
			 * @readonly
			 */
			public readonly gradientFeatherSettings: Adobe.Indesign.GradientFeatherSetting;
			/**
			 * Settings related to the inner glow effect.
			 * @type {Adobe.Indesign.InnerGlowSetting}
			 * @readonly
			 */
			public readonly innerGlowSettings: Adobe.Indesign.InnerGlowSetting;
			/**
			 * Settings related to the inner shadow effect.
			 * @type {Adobe.Indesign.InnerShadowSetting}
			 * @readonly
			 */
			public readonly innerShadowSettings: Adobe.Indesign.InnerShadowSetting;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * Settings related to the outer glow effect.
			 * @type {Adobe.Indesign.OuterGlowSetting}
			 * @readonly
			 */
			public readonly outerGlowSettings: Adobe.Indesign.OuterGlowSetting;
			/**
			 * The parent of the StrokeTransparencySetting (a PageItem, 
			 * HtmlItem, FormField, SignatureField, TextBox, RadioButton, 
			 * ListBox, ComboBox, CheckBox, MultiStateObject, Button, 
			 * MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, 
			 * GraphicLine, Rectangle, Oval, Graphic, ImportedPage, PICT, 
			 * WMF, PDF, EPS, Image, Group, TextFrame, PageItemDefault or 
			 * ObjectStyle).
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
			 * @type {Adobe.Indesign.SatinSetting}
			 * @readonly
			 */
			public readonly satinSettings: Adobe.Indesign.SatinSetting;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerStrokeTransparencySetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerStrokeTransparencySetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}