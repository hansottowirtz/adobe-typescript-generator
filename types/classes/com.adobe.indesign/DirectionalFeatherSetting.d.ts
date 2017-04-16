/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class DirectionalFeatherSetting extends Adobe.Indesign.Preference {
			/** The angle of the feather. (Range: 180 to -180) */
			public angle: number;
			/** If true, the directional feather effect is applied. */
			public applied: boolean;
			/**
			 * The feather width (in pixels) on the bottom side of the 
			 * object DirectionalFeatherSetting. (Range: .2 to 250)
			 */
			public bottomWidth: any;
			/**
			 * The amount to choke the directional feather (as a percentage 
			 * of the feather width). (Range: 0 to 100)
			 */
			public chokeAmount: number;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The shape-following algorithm applied to the feather. */
			public followShapeMode: Adobe.Indesign.FollowShapeModeOptions;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The feather width (in pixels) on the left side of the 
			 * DirectionalFeatherSetting.
			 */
			public leftWidth: any;
			/**
			 * The amount of noise (as a percentage) applied to the feather 
			 * region. (Range: 0 to 100)
			 */
			public noise: number;
			/**
			 * The parent of the DirectionalFeatherSetting (a 
			 * TransparencySetting, StrokeTransparencySetting, 
			 * FillTransparencySetting or ContentTransparencySetting).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The feather width (in pixels) on the right side of the 
			 * DirectionalFeatherSetting. (Range: .2 to 250)
			 */
			public rightWidth: any;
			/**
			 * The feather width (in pixels) on the top side of the object 
			 * DirectionalFeatherSetting. (Range: .2 to 250)
			 */
			public topWidth: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerDirectionalFeatherSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerDirectionalFeatherSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}