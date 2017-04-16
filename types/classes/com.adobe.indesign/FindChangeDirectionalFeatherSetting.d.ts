/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** DirectionalFeatherSetting */
		class FindChangeDirectionalFeatherSetting extends Adobe.Indesign.DirectionalFeatherSetting {
			/**
			 * The angle of the feather. (Range: 180 to -180). Can return: 
			 * Real (-180 - 180) or NothingEnum enumerator.
			 */
			public angle: number;
			/**
			 * If true, the directional feather effect is applied. Can 
			 * return: Boolean or NothingEnum enumerator.
			 */
			public applied: boolean;
			/**
			 * The feather width (in pixels) on the bottom side of the 
			 * object FindChangeDirectionalFeatherSetting. (Range: .2 to 
			 * 250). Can return: Unit (0 - 1000 points) or NothingEnum 
			 * enumerator.
			 */
			public bottomWidth: any;
			/**
			 * The amount to choke the directional feather (as a percentage 
			 * of the feather width). (Range: 0 to 100). Can return: Real 
			 * (0 - 100) or NothingEnum enumerator.
			 */
			public chokeAmount: number;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The shape-following algorithm applied to the feather. Can 
			 * return: FollowShapeModeOptions enumerator or NothingEnum 
			 * enumerator.
			 */
			public followShapeMode: Adobe.Indesign.FollowShapeModeOptions;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The feather width (in pixels) on the left side of the 
			 * FindChangeDirectionalFeatherSetting. Can return: Unit (0 - 
			 * 1000 points) or NothingEnum enumerator.
			 */
			public leftWidth: any;
			/**
			 * The amount of noise (as a percentage) applied to the feather 
			 * region. (Range: 0 to 100). Can return: Real (0 - 100) or 
			 * NothingEnum enumerator.
			 */
			public noise: number;
			/**
			 * The parent of the FindChangeDirectionalFeatherSetting (a 
			 * FindChangeTransparencySetting, 
			 * FindChangeStrokeTransparencySetting, 
			 * FindChangeFillTransparencySetting or 
			 * FindChangeContentTransparencySetting).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The feather width (in pixels) on the right side of the 
			 * FindChangeDirectionalFeatherSetting. (Range: .2 to 250). Can 
			 * return: Unit (0 - 1000 points) or NothingEnum enumerator.
			 */
			public rightWidth: any;
			/**
			 * The feather width (in pixels) on the top side of the object 
			 * FindChangeDirectionalFeatherSetting. (Range: .2 to 250). Can 
			 * return: Unit (0 - 1000 points) or NothingEnum enumerator.
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
			public addEventListenerFindChangeDirectionalFeatherSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerFindChangeDirectionalFeatherSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}