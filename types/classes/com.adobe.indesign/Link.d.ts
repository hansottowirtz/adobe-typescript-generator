/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Link extends Adobe.Csawlib.CSHostObject {
			/**
			 * Dispatched when the value of a property changes on this 
			 * Link. This event bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_ATTRIBUTE_CHANGED: string;
			/**
			 * Dispatched after a Link is deleted. This event bubbles. This 
			 * event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_DELETE: string;
			/**
			 * Dispatched after a Link is embedded. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_EMBED: string;
			/**
			 * Dispatched after a Link is relocated from one object to 
			 * another. This event bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_MOVE: string;
			/**
			 * Dispatched after a Link is created. This event bubbles. This 
			 * event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_NEW: string;
			/**
			 * Dispatched after a Link is unembedded. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_UNEMBED: string;
			/**
			 * Dispatched after a Link is updated. This event bubbles. This 
			 * event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_UPDATE: string;
			/**
			 * The asset ID of the linked object.
			 * @type {string}
			 * @readonly
			 */
			public readonly assetID: string;
			/**
			 * The asset URL of the linked object.
			 * @type {string}
			 * @readonly
			 */
			public readonly assetURL: string;
			/**
			 * Dispatched before a Link is deleted. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_DELETE: string;
			/**
			 * Dispatched before a Link is embedded. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_EMBED: string;
			/**
			 * Dispatched before a Link is relocated from one object to 
			 * another. This event bubbles. This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_MOVE: string;
			/**
			 * Dispatched before a Link is unembedded. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_UNEMBED: string;
			/**
			 * Dispatched before a Link is updated. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_UPDATE: string;
			/**
			 * The date and time the Link was created.
			 * @type {Date}
			 * @readonly
			 */
			public readonly date: Date;
			/**
			 * If true, indicates the linked object has been edited in the 
			 * current document but the source file has not been updated.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly edited: boolean;
			/**
			 * The Version Cue editing state of the file.
			 * @type {Adobe.Indesign.EditingState}
			 * @readonly
			 */
			public readonly editingState: Adobe.Indesign.EditingState;
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
			 * The file path (colon delimited on the Mac OS). Can also 
			 * accept: File.
			 * @type {string}
			 * @readonly
			 */
			public readonly filePath: string;
			/**
			 * The unique ID of the Link.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the link in the links collection.
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
			 * A collection of links.
			 * @type {Adobe.Indesign.Links}
			 * @readonly
			 */
			public readonly links: Adobe.Indesign.Links;
			/**
			 * The file type of the linked object.
			 * @type {string}
			 * @readonly
			 */
			public readonly linkType: string;
			/**
			 * XMP data for the link source file.
			 * @type {Adobe.Indesign.LinkMetadata}
			 * @readonly
			 */
			public readonly linkXmp: Adobe.Indesign.LinkMetadata;
			/**
			 * The name of the Link.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * If true, indicates a link to a full-resolution version of 
			 * the source file is needed. If false, indicates the object is 
			 * embedded.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly needed: boolean;
			/**
			 * The linked object. Can return: Story, Graphic, Movie or 
			 * Sound.
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
			 * The size of the Link file.
			 * @type {number}
			 * @readonly
			 */
			public readonly size: number;
			/**
			 * The status of the link.
			 * @type {Adobe.Indesign.LinkStatus}
			 * @readonly
			 */
			public readonly status: Adobe.Indesign.LinkStatus;
			/**
			 * The Version Cue version state of the file.
			 * @type {Adobe.Indesign.VersionState}
			 * @readonly
			 */
			public readonly versionState: Adobe.Indesign.VersionState;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerLink(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Check in to Version Cue.
			 * @param {string} versionCommentsParam The comment for this 
			 * version (Optional)
			 * @param {boolean} forceSaveParam Forcibly save a version 
			 * (Optional)
			 * @returns {void}
			 */
			public checkIn(versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Copies the link file to the specified location.
			 * @param {File} toParam The file or folder to which to copy 
			 * the file.
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 * @returns {void}
			 */
			public copyLink(toParam: File, versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Opens the source file of the link in the default editor for 
			 * the source file type.
			 * @returns {void}
			 */
			public editOriginal(): void;
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
			 * Opens the source file of the link in InDesign for 
			 * SharedContent links.
			 * @returns {void}
			 */
			public goToSource(): void;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 * @returns {void}
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Points the link to a new source file.
			 * @param {any} toParam The full path name of the new source 
			 * file. Can accept: File or String.
			 * @returns {void}
			 */
			public relink(toParam: any): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerLink(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Opens Adobe Bridge and selects the source file of the link.
			 * @returns {void}
			 */
			public revealInBridge(): void;
			/**
			 * Opens the file system to the folder that contains the source 
			 * file of the link, and selects the file.
			 * @returns {void}
			 */
			public revealInSystem(): void;
			/**
			 * Selects the link.
			 * @returns {void}
			 */
			public show(): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
			/**
			 * Unembeds the source file. If no folder is specified, creates 
			 * a link to the original source file; if a folder is 
			 * specified, copies the file to the folder and creates a link 
			 * to the copied file.
			 * @param {File} toParam The folder to which to copy the 
			 * unembedded file. (Optional)
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 * @returns {void}
			 */
			public unembed(toParam: File, versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Embeds the source file in the document.
			 * @returns {void}
			 */
			public unlink(): void;
			/**
			 * Updates the link if the source file has been changed.
			 * @returns {Adobe.Indesign.Link}
			 */
			public update(): Adobe.Indesign.Link;
		}
	}
}