/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PreflightProfile extends Adobe.Csawlib.CSHostObject {
			/**
			 * The description of the PreflightProfile.
			 * @type {string}
			 */
			public description: string;
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
			 * The unique ID of the PreflightProfile.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the PreflightProfile within its containing 
			 * object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
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
			 * The name of the PreflightProfile.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The parent of the PreflightProfile (a Application or 
			 * Document).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A collection of preflight profile rules.
			 * @type {Adobe.Indesign.PreflightProfileRules}
			 * @readonly
			 */
			public readonly preflightProfileRules: Adobe.Indesign.PreflightProfileRules;
			/**
			 * A collection of preflight rule instances.
			 * @type {Adobe.Indesign.PreflightRuleInstances}
			 * @readonly
			 */
			public readonly preflightRuleInstances: Adobe.Indesign.PreflightRuleInstances;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerPreflightProfile(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Duplicates the PreflightProfile.
			 * @returns {Adobe.Indesign.PreflightProfile}
			 */
			public duplicate(): Adobe.Indesign.PreflightProfile;
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
			 * Deletes the PreflightProfile.
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerPreflightProfile(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Saves this preflight profile to a InDesign preflight profile 
			 * file.
			 * @param {File} toParam The preflight profile file to save to.
			 * @returns {void}
			 */
			public save(toParam: File): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
			/**
			 * Unembed this profile.
			 * @returns {void}
			 */
			public unembed(): void;
			/**
			 * Update the preflight profile by copying from another 
			 * profile.
			 * @param {any} usingParam The preflight profile to copy. Can 
			 * accept: String or PreflightProfile. (Optional)
			 * @returns {void}
			 */
			public update(usingParam: any): void;
		}
	}
}