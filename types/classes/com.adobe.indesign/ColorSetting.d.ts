/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class ColorSetting extends Adobe.Indesign.Preference {
			/**
			 * If true, uses LAB alternates for spot colors when available.
			 * @type {boolean}
			 */
			public accurateLABSpots: boolean;
			/**
			 * The current color management system settings configuration. 
			 * Note: For information on possible values, see CMS settings 
			 * list.
			 * @type {string}
			 */
			public cmsSettings: string;
			/**
			 * A list of valid color management system settings 
			 * configurations.
			 * @type {any}
			 * @readonly
			 */
			public readonly cmsSettingsList: any;
			/**
			 * The file path of the CSF file to use.
			 * @type {File}
			 */
			public cmsSettingsPath: File;
			/**
			 * The policy for handling colors in a CMYK color model, 
			 * including reading and embedding color profiles, resolving 
			 * mismatches between embedded color profiles and the working 
			 * space, and moving colors between documents.
			 * @type {Adobe.Indesign.ColorSettingsPolicy}
			 */
			public cmykPolicy: Adobe.Indesign.ColorSettingsPolicy;
			/**
			 * If true, enables color management.
			 * @type {boolean}
			 */
			public enableColorManagement: boolean;
			/**
			 * The color management module (CMM) for mapping color space 
			 * gamuts between documents.
			 * @type {string}
			 */
			public engine: string;
			/**
			 * The available color engines.
			 * @type {any}
			 * @readonly
			 */
			public readonly engineList: any;
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
			 * If true, uses idealized black for CMYK-to-RGB or 
			 * CMYK-to-Gray conversions to print or export.
			 * @type {boolean}
			 */
			public idealizedBlackToExport: boolean;
			/**
			 * If true, uses idealized black for CMYK-to-RGB or 
			 * CMYK-to-Gray conversions to the screen.
			 * @type {boolean}
			 */
			public idealizedBlackToScreen: boolean;
			/**
			 * The default rendering intent.
			 * @type {Adobe.Indesign.DefaultRenderingIntent}
			 */
			public intent: Adobe.Indesign.DefaultRenderingIntent;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * If true, displays a prompt when opening a file whose 
			 * embedded color profile does not match the current working 
			 * space. The prompt provides the option to override the 
			 * default mismatch behavior.
			 * @type {boolean}
			 */
			public mismatchAskWhenOpening: boolean;
			/**
			 * If true, displays a prompt when importing an object (via 
			 * pasting, drag-and-drop, or other similar methods) whose 
			 * colors do not match the current working space. The prompt 
			 * provides the option to override the default mismatch 
			 * behavior.
			 * @type {boolean}
			 */
			public mismatchAskWhenPasting: boolean;
			/**
			 * If true, displays a prompt when opening a file that does not 
			 * have an embedded color profile. The prompt provides the 
			 * option to assign a color profile.
			 * @type {boolean}
			 */
			public missingAskWhenOpening: boolean;
			/**
			 * The parent of the ColorSetting (a Application).
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
			 * The policy for handling colors in an RGB color model, 
			 * including reading and embedding color profiles, handling 
			 * mismatches between embedded color profiles and the working 
			 * space, and moving colors from one document to another.
			 * @type {Adobe.Indesign.ColorSettingsPolicy}
			 */
			public rgbPolicy: Adobe.Indesign.ColorSettingsPolicy;
			/**
			 * If true, uses black point compensation to ensure that shadow 
			 * detail is preserved by simulating the full dynamic range of 
			 * the output device.
			 * @type {boolean}
			 */
			public useBPC: boolean;
			/**
			 * The current CMYK profile.
			 * @type {string}
			 */
			public workingSpaceCMYK: string;
			/**
			 * A list of valid CMYK color profiles.
			 * @type {any}
			 * @readonly
			 */
			public readonly workingSpaceCMYKList: any;
			/**
			 * The current RGB profile.
			 * @type {string}
			 */
			public workingSpaceRGB: string;
			/**
			 * A list of valid RGB color profiles.
			 * @type {any}
			 * @readonly
			 */
			public readonly workingSpaceRGBList: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerColorSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerColorSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}