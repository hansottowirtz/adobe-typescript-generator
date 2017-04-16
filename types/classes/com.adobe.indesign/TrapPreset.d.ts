/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TrapPreset extends Adobe.Csawlib.CSHostObject {
			/**
			 * The minimum amount (as a percentage) of black ink required 
			 * before the black width setting is applied. (Range: 0 to 100)
			 */
			public blackColorThreshold: number;
			/**
			 * The neutral density value at or above which an ink is 
			 * considered black. (Range: .001 to 10)
			 */
			public blackDensity: number;
			/**
			 * The black width. (Range depends on unit. For points: 0.0 to 
			 * 8.0; picas: 0p0 to 0p8; inches: 0 to 0.1111; mm: 0 to 2.822; 
			 * cm: 0 to .2822; ciceros: 0c0 to 0c7.507)
			 */
			public blackWidth: any;
			/**
			 * The degree (as a percentage) to which components from 
			 * abutting colors are used to reduce the trap color. (Range: 0 
			 * to 100) Note: 0% makes a trap whose neutral density is equal 
			 * to the neutral density of the darker color.
			 */
			public colorReduction: number;
			/**
			 * The default width for trapping all colors except those 
			 * involving solid black. (Range depends on unit. For points: 
			 * 0.0 to 8.0; picas: 0p0 to 0p8; inches: 0 to 0.1111; mm: 0 to 
			 * 2.822; cm: 0 to .2822; ciceros: 0c0 to 0c7.507)
			 */
			public defaultTrapWidth: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The unique ID of the TrapPreset. */
			public readonly id: number;
			/**
			 * The trap placement between vector objects and bitmap images.
			 */
			public imagePlacement: Adobe.Indesign.TrapImagePlacementTypes;
			/**
			 * If true, turns on trapping along the boundary of overlapping 
			 * or abutting bitmap images.
			 */
			public imagesToImages: boolean;
			/** The index of the TrapPreset within its containing object. */
			public readonly index: number;
			/**
			 * If true, turns on trapping among colors within individual 
			 * bitmap images.
			 */
			public internalImages: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** The name of the TrapPreset. */
			public name: string;
			/** If true, ensures that vector objects overlap bitmap images. */
			public objectsToImages: boolean;
			/**
			 * If true, ensures that one-bit images trap to abutting 
			 * objects.
			 */
			public oneBitImages: boolean;
			/** The parent of the TrapPreset (a Application or Document). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The difference (as a percentage) between the neutral 
			 * densities of abutting colors at which the trap is moved from 
			 * the darker side of a color edge toward the centerline. 
			 * (Range: 0 to 100)
			 */
			public slidingTrapThreshold: number;
			/**
			 * The amount (as a percentage) that components of abutting 
			 * colors must vary before a trap is created. (Range: 1 to 100)
			 */
			public stepThreshold: number;
			/** The shape to use at the intersection of three-way traps. */
			public trapEnd: Adobe.Indesign.TrapEndTypes;
			/** The join type of the trap preset. */
			public trapJoin: Adobe.Indesign.EndJoin;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerTrapPreset(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Duplicates the TrapPreset. */
			public duplicate(): Adobe.Indesign.TrapPreset;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Deletes the trap preset.
			 * @param {TrapPreset} replacingWithParam The trap preset to 
			 * apply in place of the deleted preset.
			 */
			public remove(replacingWithParam: TrapPreset): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerTrapPreset(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}