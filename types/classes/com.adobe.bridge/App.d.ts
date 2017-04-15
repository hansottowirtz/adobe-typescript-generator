/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class App extends Adobe.Csawlib.CSHostObject {
			/** This is not a Property Description. */
			public readonly defaultFilterCriteria: any[];
			/** This is not a Property Description. */
			public readonly defaultSortCriteria: any[];
			/** This is not a Property Description. */
			public displayDialogs: string;
			/** This is not a Property Description. */
			public document: Adobe.Bridge.Document;
			/** This is not a Property Description. */
			public readonly documents: Adobe.Bridge.Documents;
			/** This is not a Property Description. */
			public readonly extensions: any[];
			/** This is not a Property Description. */
			public readonly favorites: Adobe.Bridge.Favorites;
			/** This is not a Property Description. */
			public readonly folderRoots: any[];
			/** This is not a Property Description. */
			public readonly inspectorPanels: any[];
			/** This is not a Property Description. */
			public readonly language: string;
			/** This is not a Property Description. */
			public lastSender: string;
			/** This is not a Property Description. */
			public readonly locale: string;
			/** This is not a Property Description. */
			public readonly name: string;
			/** This is not a Property Description. */
			public readonly pendingJobs: number;
			/** This is not a Property Description. */
			public readonly preferences: Adobe.Bridge.Preferences;
			/** This is not a Property Description. */
			public readonly standardFavorites: any[];
			/** This is not a Property Description. */
			public synchronousMode: boolean;
			/** This is not a Property Description. */
			public readonly userFavorites: any[];
			/** This is not a Property Description. */
			public readonly version: string;
			/** This is not a Property Description. */
			public watchDirInterval: number;
			/** This is not a Property Description. */
			public readonly workspaces: any[];
			/**
			 * This is not a Method Description.
			 * @param {any[]} thumbnails - 
			 */
			public acquirePhysicalFiles(thumbnails: any[]): void;
			/**
			 * This is not a Method Description.
			 * @param {Thumbnail} member - 
			 */
			public addCollectionMember(member: Thumbnail): void;
			/**
			 * This is not a Method Description.
			 * @param {string} title - 
			 * @param {string} content - 
			 */
			public addCredits(title: string, content: string): void;
			/**
			 * This is not a Method Description.
			 * @param {string} uri - 
			 */
			public addCustomRoot(uri: string): boolean;
			/**
			 * This is not a Method Description.
			 * @param {string} title - 
			 * @param {string} content - 
			 */
			public addLegalNotice(title: string, content: string): void;
			/** This is not a Method Description. */
			public beep(): void;
			/** This is not a Method Description. */
			public bringToFront(): void;
			/**
			 * This is not a Method Description.
			 * @param {string} path - 
			 */
			public browseTo(path: string): void;
			/**
			 * This is not a Method Description.
			 * @param {string} path - 
			 * @param {boolean} recurse - 
			 * @param {boolean} buildFullsize - 
			 */
			public buildFolderCache(path: string, recurse: boolean, buildFullsize: boolean): boolean;
			/**
			 * This is not a Method Description.
			 * @param {number} id - 
			 */
			public cancelTask(id: number): void;
			/**
			 * This is not a Method Description.
			 * @param {string} name - 
			 */
			public createCollection(name: string): Adobe.Bridge.Thumbnail;
			/**
			 * This is not a Method Description.
			 * @param {Thumbnail} collection - 
			 */
			public deleteCollection(collection: Thumbnail): boolean;
			/** This is not a Method Description. */
			public enqueueOperation(): void;
			/**
			 * This is not a Method Description.
			 * @param {File} file - 
			 */
			public exportKeywordsToFile(file: File): void;
			/**
			 * This is not a Method Description.
			 * @param {any[]} thumbnails - 
			 * @param {Thumbnail} collection - 
			 */
			public getCollectionMembers(thumbnails: any[], collection: Thumbnail): void;
			/**
			 * This is not a Method Description.
			 * @param {any[]} thumbnails - 
			 */
			public getCollections(thumbnails: any[]): void;
			/** This is not a Method Description. */
			public hide(): void;
			/**
			 * This is not a Method Description.
			 * @param {File} file - 
			 * @param {string} importType - 
			 */
			public importKeywordsFromFile(file: File, importType: string): void;
			/**
			 * This is not a Method Description.
			 * @param {Thumbnail} collection - 
			 * @param {Thumbnail} member - 
			 */
			public isCollectionMember(collection: Thumbnail, member: Thumbnail): boolean;
			/** This is not a Method Description. */
			public isProcessingJob(): boolean;
			/**
			 * This is not a Method Description.
			 * @param {any} params - 
			 */
			public launchHelp(params: any): boolean;
			/**
			 * This is not a Method Description.
			 * @param {Thumbnail} scope - 
			 * @param {any} specification - 
			 */
			public makeSearch(scope: Thumbnail, specification: any): Adobe.Bridge.Thumbnail;
			/**
			 * This is not a Method Description.
			 * @param {string} url - 
			 */
			public openUrl(url: string): void;
			/**
			 * This is not a Method Description.
			 * @param {Operator} operator - 
			 */
			public operationChanged(operator: Operator): void;
			/**
			 * This is not a Method Description.
			 * @param {any[]} files - 
			 */
			public preflightFiles(files: any[]): boolean;
			/** This is not a Method Description. */
			public purgeAllCaches(): void;
			/**
			 * This is not a Method Description.
			 * @param {string} path - 
			 */
			public purgeFolderCache(path: string): void;
			/** This is not a Method Description. */
			public quit(): void;
			/**
			 * This is not a Method Description.
			 * @param {string} protocol - 
			 * @param {any} handler - 
			 */
			public registerBrowseScheme(protocol: string, handler: any): boolean;
			/**
			 * This is not a Method Description.
			 * @param {ExtensionHandler} extension - 
			 */
			public registerExtension(extension: ExtensionHandler): boolean;
			/**
			 * This is not a Method Description.
			 * @param {ExtensionHandler} extension - 
			 * @param {Infoset} infoset - 
			 */
			public registerInfoset(extension: ExtensionHandler, infoset: Infoset): boolean;
			/**
			 * This is not a Method Description.
			 * @param {InspectorPanel} pivotpanel - 
			 */
			public registerInspectorPanel(pivotpanel: InspectorPanel): boolean;
			/**
			 * This is not a Method Description.
			 * @param {string} prefix - 
			 * @param {ExtensionHandler} extension - 
			 */
			public registerPrefix(prefix: string, extension: ExtensionHandler): boolean;
			/**
			 * This is not a Method Description.
			 * @param {Thumbnail} member - 
			 */
			public removeCollectionMember(member: Thumbnail): void;
			/**
			 * This is not a Method Description.
			 * @param {string} title - 
			 */
			public removeCredits(title: string): void;
			/**
			 * This is not a Method Description.
			 * @param {string} title - 
			 */
			public removeLegalNotice(title: string): void;
			/**
			 * This is not a Method Description.
			 * @param {Thumbnail} thumbnail - 
			 * @param {string} name - 
			 */
			public renameCollection(thumbnail: Thumbnail, name: string): boolean;
			/**
			 * This is not a Method Description.
			 * @param {any[]} sources - 
			 */
			public runSlideshow(sources: any[]): void;
			/**
			 * This is not a Method Description.
			 * @param {string} code - 
			 * @param {number} delay - 
			 * @param {boolean} repeat - 
			 */
			public scheduleTask(code: string, delay: number, repeat: boolean): number;
			/**
			 * This is not a Method Description.
			 * @param {string} command - 
			 */
			public system(command: string): void;
			/**
			 * This is not a Method Description.
			 * @param {ExtensionHandler} extension - 
			 */
			public unregisterExtension(extension: ExtensionHandler): void;
			/**
			 * This is not a Method Description.
			 * @param {ExtensionHandler} extension - 
			 * @param {Infoset} infoset - 
			 */
			public unregisterInfoset(extension: ExtensionHandler, infoset: Infoset): void;
			/**
			 * This is not a Method Description.
			 * @param {InspectorPanel} pivotpanel - 
			 */
			public unregisterInspectorPanel(pivotpanel: InspectorPanel): boolean;
			/**
			 * This is not a Method Description.
			 * @param {string} prefix - 
			 */
			public unregisterPrefix(prefix: string): boolean;
		}
	}
}