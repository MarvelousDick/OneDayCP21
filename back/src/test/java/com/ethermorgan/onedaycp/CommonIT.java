package com.ethermorgan.onedaycp;

import org.apache.ibatis.jdbc.ScriptRunner;
import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.nutz.lang.Lang;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.io.InputStreamReader;
import java.io.Reader;
import java.sql.Connection;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:application.yml" })
public abstract class CommonIT {
    private static final Logger logger = LoggerFactory.getLogger(CommonIT.class);

    @Autowired
    private SqlSessionFactory sqlSessionFactory;

//    @Autowired
//    public AuditHelper auditHelper;


    static {
        System.setProperty("atms_env_id", "local");
    }

//    @BeforeClass
//    public static void initialize() {
//        CommonTestUtils.initTestAuth();
//    }

	protected void execSqlFile(String sqlFilePath) {

        Connection conn = null;
        ScriptRunner runner = null;
        Reader reader = null;
        try {
            conn = sqlSessionFactory.openSession().getConnection();
            runner = new ScriptRunner(conn);
            runner.setAutoCommit(true);
            runner.setFullLineDelimiter(true);
            runner.setDelimiter("GO");
            runner.setSendFullScript(false);
            // runner.setStopOnError(false);
            runner.setStopOnError(true);
            runner.setLogWriter(null);

            reader = new InputStreamReader(ClassLoader.getSystemResourceAsStream(sqlFilePath), "utf-8");
            runner.runScript(reader);

        } catch (Exception e) {
            logger.error("Error executing sql file " + sqlFilePath, e);
            throw Lang.wrapThrow(e);
        } finally {
            try {
                if (conn != null) {
                    runner.closeConnection();
                    conn.close();
                }
                if (reader != null) {
                    reader.close();
                }
            } catch (Exception e) {
                if (conn != null) {
                    conn = null;
                }
                if (reader != null) {
                    reader = null;
                }
            }
        }

    }
}
