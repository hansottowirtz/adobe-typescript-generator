/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XMLRuleProcessor extends Adobe.Csawlib.CSHostObject {
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
			 * If true, the XML rule process has halted.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly halted: boolean;
			/**
			 * The unique ID of the XMLRuleProcessor.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the XMLRuleProcessor within its containing 
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
			 * The name of the XMLRuleProcessor; this is an alias to the 
			 * XMLRuleProcessor's label property.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The parent of the XMLRuleProcessor (a Application).
			 * @type {Adobe.Indesign.Application}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Application;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The XPath condition paths of the rules in the rule set.
			 * @type {any}
			 * @readonly
			 */
			public readonly rulePaths: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerXMLRuleProcessor(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Stop processing XML rule set.
			 * @returns {void}
			 */
			public endProcessingRuleSet(): void;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 * @returns {string}
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Finds the next matching XML element.
			 * @returns {Adobe.Indesign.XMLRuleMatchData}
			 */
			public findNextMatch(): Adobe.Indesign.XMLRuleMatchData;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Halt the XML rule processor.
			 * @returns {void}
			 */
			public halt(): void;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 * @returns {void}
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Deletes the XMLRuleProcessor.
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
			public removeEventListenerXMLRuleProcessor(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Do not process XML elements (children) of the current XML 
			 * element.
			 * @returns {void}
			 */
			public skipChildren(): void;
			/**
			 * Start processing an XML rule set.
			 * @param {XMLElement} initialElementParam The XML element at 
			 * which to start processing the rule set.
			 * @returns {Adobe.Indesign.XMLRuleMatchData}
			 */
			public startProcessingRuleSet(initialElementParam: XMLElement): Adobe.Indesign.XMLRuleMatchData;
			/**
			 * Process the XML elements of the current XML element.
			 * @returns {Adobe.Indesign.XMLRuleMatchData}
			 */
			public startProcessingSubtree(): Adobe.Indesign.XMLRuleMatchData;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}