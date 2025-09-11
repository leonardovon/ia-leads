/**
 * DISPARADOR PRO - ARQUIVO DE INTEGRAÇÃO
 * Gerado automaticamente em: 18/08/2025, 23:08:18
 * Licenciado para: leonardovon@gmail.com
 * 
 * ⚠️  ATENÇÃO: Este arquivo foi gerado com credenciais validadas.
 * ⚠️  Não compartilhe este arquivo ou suas configurações.
 * 
 * INSTRUÇÕES:
 * 1. Coloque este arquivo na pasta raiz do Disparador PRO
 * 2. Certifique-se de que está no mesmo diretório do index.html
 * 3. Os arquivos main.js e relatorio.js irão carregar estas configurações automaticamente
 */

// ========================================
// CONFIGURAÇÕES DOS WEBHOOKS
// ========================================

// Webhook principal para disparo de mensagens
const WEBHOOK_URL = 'https://ia-imobiliaria-n8n.mq3xca.easypanel.host/webhook/disparadorProV2';

// Webhook para verificação de conexão WhatsApp
const WEBHOOK_CONEXAO = 'https://ia-imobiliaria-n8n.mq3xca.easypanel.host/webhook/verificarConexao';

// Webhook para envio de emails/relatórios
const WEBHOOK_EMAIL = 'https://ia-imobiliaria-n8n.mq3xca.easypanel.host/webhook/enviarEmail';

// Webhook para exportação de contatos da instância
const EXPORT_CONTACTS_URL = 'https://ia-imobiliaria-n8n.mq3xca.easypanel.host/webhook/exportarContatos';

// ========================================
// ✅ NOVO: METADADOS DE LICENÇA
// ========================================
const LICENSE_METADATA = {
    email: 'leonardovon@gmail.com',
    licenseKey: '1e5baa1e-28b2-407e-baf3-ce9833561a78',
    generatedAt: '18/08/2025, 23:08:18',
    version: '2.5',
    validated: true
};

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

/**
 * Obter configuração completa dos webhooks
 */
function getWebhookConfig() {
    return {
        url: WEBHOOK_URL,
        conexao: WEBHOOK_CONEXAO,
        email: WEBHOOK_EMAIL,
        exportContatos: EXPORT_CONTACTS_URL
    };
}

/**
 * ✅ NOVA: Obter informações da licença
 */
function getLicenseInfo() {
    return {
        email: LICENSE_METADATA.email,
        licenseKey: LICENSE_METADATA.licenseKey,
        generatedAt: LICENSE_METADATA.generatedAt,
        version: LICENSE_METADATA.version,
        isValid: !!(LICENSE_METADATA.email && LICENSE_METADATA.licenseKey)
    };
}

/**
 * ✅ NOVA: Validar integridade da licença
 */
function validateLicenseIntegrity() {
    if (typeof LICENSE_METADATA === 'undefined') {
        console.error('🚨 Arquivo de licença não encontrado!');
        return false;
    }

    const requiredFields = ['email', 'licenseKey', 'generatedAt', 'version'];
    for (const field of requiredFields) {
        if (!LICENSE_METADATA[field]) {
            console.error(`🚨 Campo de licença ausente: ${field}`);
            return false;
        }
    }

    return true;
}

/**
 * Validar se todas as configurações estão definidas
 */
function validateWebhookConfig() {
    const config = getWebhookConfig();
    
    if (!config.url || !config.conexao || !config.email || !config.exportContatos) {
        console.error('❌ Configuração incompleta no arquivo integracao.js');
        return false;
    }
    
    // Validar formato das URLs
    const urlPattern = /^https?:\/\/.+/;
    
    if (!urlPattern.test(config.url) || 
        !urlPattern.test(config.conexao) || 
        !urlPattern.test(config.email) ||
        !urlPattern.test(config.exportContatos)) {
        console.error('❌ URLs inválidas no arquivo integracao.js');
        return false;
    }
    
    return true;
}

/**
 * Log de inicialização
 */
console.log('✅ Arquivo integracao.js carregado com sucesso!');
console.log('📡 Webhooks configurados:');
console.log('  • Principal:', WEBHOOK_URL);
console.log('  • Conexão:', WEBHOOK_CONEXAO);
console.log('  • Email:', WEBHOOK_EMAIL);
console.log('  • Export Contatos:', EXPORT_CONTACTS_URL);
console.log('🔒 Licenciado para:', LICENSE_METADATA.email);
console.log('🔑 Chave da licença:', LICENSE_METADATA.licenseKey.replace(/./g, '*'));

// ✅ VALIDAR LICENÇA NA INICIALIZAÇÃO
if (!validateLicenseIntegrity()) {
    console.error('❌ FALHA NA VALIDAÇÃO DA LICENÇA!');
    alert('❌ Arquivo de licença inválido! Entre em contato com o suporte.');
} else if (validateWebhookConfig()) {
    console.log('✅ Todas as configurações estão válidas!');
} else {
    console.warn('⚠️ Verifique as configurações no arquivo integracao.js');
}

// ========================================
// EXPORTAÇÃO (COMPATIBILIDADE)
// ========================================

// Para compatibilidade com módulos ES6 (se necessário)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        WEBHOOK_URL,
        WEBHOOK_CONEXAO,
        WEBHOOK_EMAIL,
        EXPORT_CONTACTS_URL,
        LICENSE_METADATA,
        getWebhookConfig,
        getLicenseInfo,
        validateLicenseIntegrity,
        validateWebhookConfig
    };
}