/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TrapPreset extends Adobe.Csawlib.CSHostObject {
			/**
			 * The minimum amount (as a percentage) of black ink required 
			 * before the black width setting is applied. (Range: 0 to 100)
			 * @type {number}
			 */
			public blackColorThreshold: number;
			/**
			 * The neutral density value at or above which an ink is 
			 * considered black. (Range: .001 to 10)
			 * @type {number}
			 */
			public blackDensity: number;
			/**
			 * The black width. (Range depends on unit. For points: 0.0 to 
			 * 8.0; picas: 0p0 to 0p8; inches: 0 to 0.1111; mm: 0 to 2.822; 
			 * cm: 0 to .2822; ciceros: 0c0 to 0c7.507)
			 * @type {any}
			 */
			public blackWidth: any;
			/**
			 * The degree (as a percentage) to which components from 
			 * abutting colors are used to reduce the trap color. (Range: 0 
			 * to 100) Note: 0% makes a trap whose neutral density is equal 
			 * to the neutral density of the darker color.
			 * @type {number}
			 */
			public colorReduction: number;
			/**
			 * The default width for trapping all colors except those 
			 * involving solid black. (Range depends on unit. For points: 
			 * 0.0 to 8.0; picas: 0p0 to 0p8; inches: 0 to 0.1111; mm: 0 to 
			 * 2.822; cm: 0 to .2822; ciceros: 0c0 to 0c7.507)
			 * @type {any}
			 */
			public defaultTrapWidth: any;
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
			 * The unique ID of the TrapPreset.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The trap placement between vector objects and bitmap images.
			 * @type {Adobe.Indesign.TrapImagePlacementTypes}
			 */
			public imagePlacement: Adobe.Indesign.TrapImagePlacementTypes;
			/**
			 * If true, turns on trapping along the boundary of overlapping 
			 * or abutting bitmap images.
			 * @type {boolean}
			 */
			public imagesToImages: boolean;
			/**
			 * The index of the TrapPreset within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * If true, turns on trapping among colors within individual 
			 * bitmap images.
			 * @type {boolean}
			 */
			public internalImages: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * The name of the TrapPreset.
			 * @type {string}
			 */
			public name: string;
			/**
			 * If true, ensures that vector objects overlap bitmap images.
			 * @type {boolean}
			 */
			public objectsToImages: boolean;
			/**
			 * If true, ensures that one-bit images trap to abutting 
			 * objects.
			 * @type {boolean}
			 */
			public oneBitImages: boolean;
			/**
			 * The parent of the TrapPreset (a Application or Document).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The difference (as a percentage) between the neutral 
			 * densities of abutting colors at which the trap is moved from 
			 * the darker side of a color edge toward the centerline. 
			 * (Range: 0 to 100)
			 * @type {number}
			 */
			public slidingTrapThreshold: number;
			/**
			 * The amount (as a percentage) that components of abutting 
			 * colors must vary before a trap is created. (Range: 1 to 100)
			 * @type {number}
			 */
			public stepThreshold: number;
			/**
			 * The shape to use at the intersection of three-way traps.
			 * @type {Adobe.Indesign.TrapEndTypes}
			 */
			public trapEnd: Adobe.Indesign.TrapEndTypes;
			/**
			 * The join type of the trap preset.
			 * @type {Adobe.Indesign.EndJoin}
			 */
			public trapJoin: Adobe.Indesign.EndJoin;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerTrapPreset(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Duplicates the TrapPreset.
			 * @returns {Adobe.Indesign.TrapPreset}
			 */
			public duplicate(): Adobe.Indesign.TrapPreset;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 * @returns {string}
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 * @returns {void}
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Deletes the trap preset.
			 * @param {TrapPreset} replacingWithParam The trap preset to 
			 * apply in place of the deleted preset.
			 * @returns {void}
			 */
			public remove(replacingWithParam: TrapPreset): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerTrapPreset(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}