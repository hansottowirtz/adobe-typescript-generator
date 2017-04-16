/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * Thumbnail objects can represent:Files and folders in the 
		 * local file system. URLsNavigation nodes of types defined by 
		 * a node-handling extension. A thumbnail's applicable node 
		 * handler determines how nodes are displayed when that 
		 * thumbnail is selected. The Content pane can show thumbnail 
		 * icons. CAUTION: When a script accesses the properties of a 
		 * Thumbnail object, some properties of the object may not be 
		 * immediately available. To ensure the object contains current 
		 * data, set app.synchronousMode to true before accessing 
		 * properties.
		 */
		class Thumbnail extends Adobe.Csawlib.CSHostObject {
			/**
			 * If the value of type is alias, the kind of target this 
			 * thumbnail represents.
			 */
			public readonly aliasType: string;
			/** The node children of this container node. */
			public readonly children: any[];
			/** When true, the node is a container. */
			public readonly container: boolean;
			/**
			 * Provides access to the core node-data sets defined by the 
			 * default node handler.
			 */
			public readonly core: Adobe.Bridge.Infoset;
			/**
			 * Date the referenced file or folder was created, if it can be 
			 * determined.
			 */
			public readonly creationDate: string;
			/** DEPRECATED. Do not use. */
			public displayMode: string;
			/** DEPRECATED. Do not use. */
			public displayPath: string;
			/**
			 * For a file or folder, whether the resource for this node 
			 * exists on the local disk.
			 */
			public readonly exists: boolean;
			/**
			 * All of the ExtensionHandler objects that could handle this 
			 * node.
			 */
			public readonly extensions: any[];
			/**
			 * Whether this thumbnail is associated with a file that 
			 * contains embedded metadata.
			 */
			public readonly hasMetadata: boolean;
			/** Whether this thumbnail is displayable. */
			public readonly hidden: boolean;
			/**
			 * The path to the operating-system icon image file for this 
			 * node, when it represents a web page.
			 */
			public iconPath: string;
			/** The label string for this thumbnail. */
			public label: string;
			/**
			 * Date the referenced file or folder was last modified, if it 
			 * can be determined.
			 */
			public readonly lastModifiedDate: string;
			/**
			 * Whether the thumbnail is associated with a local file-system 
			 * object or a Version Cue node (which can have both a local 
			 * and remote replica).
			 */
			public readonly location: string;
			/**
			 * Whether this node represents a read-only file in Windows, or 
			 * a file that has been locked in the Finder in Mac OS.
			 */
			public readonly locked: boolean;
			/**
			 * The Metadata object associated with this thumbnail, if it 
			 * supports embedded metadata.
			 */
			public metadata: any;
			/** The referenced file’s MIME type, if it can be determined. */
			public readonly mimeType: string;
			/** The ExtensionModel object associated with this node. */
			public readonly model: any;
			/** The label displayed for the thumbnail. */
			public name: string;
			/** The Thumbnail object for the parent node of this thumbnail. */
			public readonly parent: Adobe.Bridge.Thumbnail;
			/** DEPRECATED. Use spec or uri instead. */
			public readonly path: string;
			/** The rating value for this thumbnail. */
			public rating: number;
			/**
			 * The angle of rotation for the icon image of this node, in 
			 * degrees.
			 */
			public rotation: number;
			/**
			 * A  File or Folder object for this thumbnail’s referenced 
			 * node.
			 */
			public readonly spec: File;
			/**
			 * Waits for confirmation of a valid value to return the 
			 * Metadata object associated with this thumbnail, if any.
			 */
			public synchronousMetadata: any;
			/** The type of node this thumbnail references. */
			public readonly type: string;
			/**
			 * The full Bridge URI ( unique resource identifier) for this 
			 * thumbnail.
			 */
			public readonly uri: string;
			public constructor();
			/**
			 * DEPRECATED. Do not use.
			 * @param {Thumbnail} thumbnail 
			 */
			public add(thumbnail: Thumbnail): void;
			/**
			 * Creates a new Thumbnail object that references the same node 
			 * as this one.
			 * @param {string} path 
			 */
			public copyTo(path: string): boolean;
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
			/**
			 * DEPRECATED. Do not use.
			 * @param {Thumbnail} thumbnail 
			 */
			public insert(thumbnail: Thumbnail): void;
			/**
			 * Changes the parent of this thumbnail.
			 * @param {string} path 
			 */
			public moveTo(path: string): boolean;
			/**
			 * Launches the file referenced by this thumbnail in the 
			 * appropriate application (such as Photoshop for JPEG files).
			 */
			public open(): boolean;
			/**
			 * Launches the file referenced by this thumbnail in the 
			 * specified application.
			 * @param {string} appPath 
			 */
			public openWith(appPath: string): boolean;
			/**
			 * Refreshes an associated information set or sets to reflect 
			 * the current state of this node’s referenced file or folder.
			 * @param {string} infoset 
			 */
			public refresh(infoset: string): boolean;
			/**
			 * Registers a callback function that is executed whenever a 
			 * node-data value in this thumbnail changes.
			 * @param {Function} callback 
			 */
			public registerInterest(callback: Function): void;
			/** Deletes this Thumbnail object. */
			public remove(): void;
			/**
			 * If the value of type is alias, retrieves a Thumbnail object 
			 * for the target of the alias.
			 */
			public resolve(): Adobe.Bridge.Thumbnail;
			/**
			 * Opens the platform-specific native file browser, displays 
			 * and selects the file or folder for this thumbnail.
			 */
			public revealInSystemBrowser(): void;
			/**
			 * Removes a callback function from the list of callbacks 
			 * registered for this thumbnail.
			 * @param {Function} callback 
			 */
			public unregisterInterest(callback: Function): void;
			/** Re-enumerates the children of a container node. */
			public verifyExternalChanges(): void;
		}
	}
}